import { Injectable } from '@angular/core';
import { Igame } from '../interfaces/igame';

@Injectable({
  providedIn: 'root'
})
export class GamingService {
  protected gamesList : Igame[] = [
    {
      "id": 1,
      "title": "Programador FrontEnd",
      "description": "Esta es mi habilidad 1",
      "img": "../../../assets/img/Archimedes Logo.png",
      "category": "Esta es categoria 1",
      "stock": 10,
      "price": 100
    },
    {
      "id": 2,
      "title": "Modelador 3D",
      "description": "Esta es mi habilidad 1",
      "img": "../../../assets/img/Archimedes Logo.png",
      "category": "Esta es categoria 1",
      "stock": 10,
      "price": 100
    },
    {
      "id": 3,
      "title": "Conocimiento en Base de datos",
      "description": "Esta es mi habilidad 1",
      "img": "../../../assets/img/Archimedes Logo.png",
      "category": "Esta es categoria 1",
      "stock": 10,
      "price": 100
    },
  ]
  
  
  constructor() { }

  getAllGameList() {
    return this.gamesList
  }

  getGameById(id: number) {
    return this.gamesList.find(value => value.id === id)
  }

}
