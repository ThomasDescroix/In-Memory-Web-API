import {InMemoryDbService} from "angular-in-memory-web-api";
import { Cat } from "src/cat/Cat";

export class InMemoryCatService extends InMemoryDbService {
  createDb(): { cats: Cat[] } {
    return {
      cats: [
        {
          "id": 1,
          "name": "British Shorthair",
          "image":
            {
              "id": "s4wQfYoEk",
              "width": 1600,
              "height": 1457,
              "url": "https://cdn2.thecatapi.com/images/s4wQfYoEk.jpg"
            }
        }, 
        {
          "id": 2,
          "name": "Dragon Li",
          "image":
            {
              "id": "BQMSld0A0",
              "width": 1080,
              "height": 1080,
              "url": "https://cdn2.thecatapi.com/images/BQMSld0A0.jpg"
            }
        },
        {
          "id": 3,
          "name": "Korat",
          "image":
            {
              "id": "DbwiefiaY",
              "width": 1200,
              "height": 627,
              "url": "https://cdn2.thecatapi.com/images/DbwiefiaY.png"
            }
        }
      ]
    }
  }
}