import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CronJobService } from 'src/cron-job/cron-job.service';
import { Outage } from './entities/outage.entity';
import { OutagesController } from './outages.controller';
import { OutagesService } from './outages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Outage])],
  controllers: [OutagesController],
  providers: [OutagesService, CronJobService]
})
export class OutagesModule { }
