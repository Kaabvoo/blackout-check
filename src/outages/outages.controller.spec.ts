import { Test, TestingModule } from '@nestjs/testing';
import { OutagesController } from './outages.controller';
import { OutagesService } from './outages.service';

describe('OutagesController', () => {
  let controller: OutagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutagesController],
      providers: [OutagesService],
    }).compile();

    controller = module.get<OutagesController>(OutagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
