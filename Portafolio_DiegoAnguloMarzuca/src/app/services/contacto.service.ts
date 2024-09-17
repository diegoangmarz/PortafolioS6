import { Injectable } from '@angular/core';
import { Icontacto } from '../interfaces/icontacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  protected contactList : Icontacto[] = [
    {
      "id": 1,
      "title": "Instagram",
      "description": "@diegoangmarz",
      "img": "../../../assets/img/Instagram_logo_2022.svg.png",
    },
    {
      "id": 2,
      "title": "Discord",
      "description": "lucasverde3",
      "img": "../../../assets/img/discordLogo.jpeg",

    },
    {
      "id": 3,
      "title": "Linkedin",
      "description": "https://www.linkedin.com/in/diego-angulo-5b45362a8/",
      "img": "../../../assets/img/Logo-Linkedin.png",

    },
  ]
  
  
  constructor() { }

  getAllGameList() {
    return this.contactList
  }

  getGameById(id: number) {
    return this.contactList.find(value => value.id === id)
  }
}
