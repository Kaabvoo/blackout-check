import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from 'db/datasource';
import { OutagesModule } from './outages/outages.module';
import { CronJobService } from './cron-job/cron-job.service';

@Module({
  imports: [TypeOrmModule.forRoot(options), OutagesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
