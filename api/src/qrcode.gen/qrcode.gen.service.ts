import { Injectable } from "@nestjs/common";
import axios from "axios";

import config from "src/config";

// This service is responsible for generating QR codes.
@Injectable()
export class QrcodeGenService {
  constructor() {}

  async getQrcode(url: string): Promise<string> {
    const encodedParams = new URLSearchParams();
    encodedParams.append("url", url);

    const options = {
      method: "POST",
      url: "https://url-shortener-service.p.rapidapi.com/shorten",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "78a4c47ddbmsh9c22db425e4ff54p1c44e2jsn755f10b3b83c",
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      data: encodedParams,
    };
    console.log(config.rapidAPI);
    try {
      const response = await axios.request(options);
      console.log(response.data);
      return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${response.data.result_url}`;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to generate QR code.");
    }
  }
}
