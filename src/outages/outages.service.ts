import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOutageDto, getQuery } from './dto/create-outage.dto';
import { UpdateOutageDto } from './dto/update-outage.dto';
import { Outage } from './entities/outage.entity';

@Injectable()
export class OutagesService {
  constructor(@InjectRepository(Outage) private _outageRepo: Repository<Outage>) {

  }
  async create(createOutageDto: CreateOutageDto) {
    var create = this._outageRepo.create(createOutageDto);
    await this._outageRepo.save(create);
  }

  findAll(query?: getQuery) {
    if (query !== undefined || query !== null) {
      return this._outageRepo.find({
        take: query.take,
        skip: !!query.page ? query.skip * query.take : query.skip
        // Agregar where aqui
      });
    }
    return this._outageRepo.find();
  }
}
