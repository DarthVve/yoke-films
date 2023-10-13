import { Controller, Get } from "@nestjs/common";
import { QrcodeGenService } from "./qrcode.gen.service";
import { v4 as uuidv4 } from "uuid";

@Controller("qrcode-gen")
export class QrcodeGenController {
  constructor(private readonly qrcodeGenService: QrcodeGenService) {}

  @Get()
  getQrcode(): Promise<string> {
    return this.qrcodeGenService.getQrcode("https://www.google.com");
  }
}
