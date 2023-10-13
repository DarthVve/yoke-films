import { Module } from "@nestjs/common";
import { QrcodeGenService } from "./qrcode.gen.service";
import { QrcodeGenController } from "./qrcode.gen.controller";

@Module({
  controllers: [QrcodeGenController],
  providers: [QrcodeGenService],
})
export class QrcodeGenModule {}
