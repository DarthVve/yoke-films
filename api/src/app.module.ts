import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { QrcodeGenModule } from "./qrcode.gen/qrcode.gen.module";
import { FilmsModule } from "./films/films.module";

@Module({
  imports: [QrcodeGenModule, FilmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
