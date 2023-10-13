import { Test, TestingModule } from '@nestjs/testing';
import { QrcodeGenService } from './qrcode.gen.service';

describe('QrcodeGenService', () => {
  let service: QrcodeGenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QrcodeGenService],
    }).compile();

    service = module.get<QrcodeGenService>(QrcodeGenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
