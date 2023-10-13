import { Test, TestingModule } from '@nestjs/testing';
import { QrcodeGenController } from './qrcode.gen.controller';

describe('QrcodeGenController', () => {
  let controller: QrcodeGenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QrcodeGenController],
    }).compile();

    controller = module.get<QrcodeGenController>(QrcodeGenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
