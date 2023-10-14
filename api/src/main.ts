import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import config from "./config";

async function bootstrap() {
  const env = require("dotenv").config();

  if (env.error) {
    throw env.error;
  }

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "https://yoke-films.vercel.app",
    methods: "GET",
  });

  await app.listen("3500");
  // console.log(`${config.web}`);
  // console.log("Loaded configuration:", JSON.stringify(config, null, 2));
}
bootstrap();
