import { Injectable } from '@nestjs/common';
import * as cron from "node-cron";
import { CreateOutageDto } from "src/outages/dto/create-outage.dto";
import { OutagesService } from "src/outages/outages.service";

@Injectable()
export class CronJobService {

    sites: string[] = ["http://google.com", "http://msn.com", "http://interno.clubers.com.mx"];

    constructor(private outagesService: OutagesService) {
        this.checkerCronJob().start();
        this.partialDeleteDatabase().start();
    }

    checkerCronJob(): any {
        return cron.schedule('*/5 * * * *', async () => {

            var objToCreate: CreateOutageDto = undefined;

            for (const x of this.sites) {
                var res = await fetch(x);

                if (res.status === 200) {
                    objToCreate = {
                        date: new Date().toString(),
                        http_code: res.status,
                        http_message: res.statusText,
                        link: x,
                        wasSuccessful: true
                    };
                    break;
                }
            }

            if (objToCreate !== undefined)
                this.outagesService.create(objToCreate);
            else
                this.outagesService.create({ date: new Date().toString(), wasSuccessful: false });
        });
    }

    partialDeleteDatabase(): any {
        return cron.schedule('0 0 */1 * *', async () => {
            var lastWeek = new Date();
            lastWeek.setDate(lastWeek.getDate() - 7);
            this.outagesService.deleteFromAndBack(lastWeek);
        });
    }
}
