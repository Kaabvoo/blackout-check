import { Injectable } from '@nestjs/common';
import * as cron from "node-cron";
import { CreateOutageDto } from "src/outages/dto/create-outage.dto";
import { OutagesService } from "src/outages/outages.service";

@Injectable()
export class CronJobService {

    sites: string[] = ["http://google.com", "http://msn.com", "http://interno.clubers.com.mx"];

    constructor(private outagesService: OutagesService) {
        const job = cron.schedule('*/5 * * * *', async () => {

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
                outagesService.create(objToCreate);
            else
                outagesService.create({ date: new Date().toString(), wasSuccessful: false });
        });

        job.start();
    }
}
