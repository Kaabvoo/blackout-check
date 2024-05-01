import { Controller, Get, Query } from '@nestjs/common';
import { OutagesService } from './outages.service';
import { getQuery } from './dto/create-outage.dto';

@Controller('outages')
export class OutagesController {
  constructor(private readonly outagesService: OutagesService) { }

  @Get()
  findAll(@Query() query: getQuery) {
    return this.outagesService.findAll(query);
  }
}
