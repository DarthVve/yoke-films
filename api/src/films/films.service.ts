import { Injectable } from "@nestjs/common";
import { filmData } from "./films.data";

//generate random films from the filmData
@Injectable()
export class FilmsService {
  private films: {}[];

  constructor() {
    this.films = filmData;
  }

  getTenRandomFilms(): {}[] {
    const numFilms = this.films.length;
    const randomIndexes = [];

    while (randomIndexes.length < 10) {
      const randomIndex = Math.floor(Math.random() * numFilms);

      // Ensure that the random index is not duplicated
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    const randomFilms = randomIndexes.map((index) => this.films[index]);
    return randomFilms;
  }
}
