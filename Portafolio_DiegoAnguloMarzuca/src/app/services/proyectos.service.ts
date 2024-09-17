import { Injectable } from '@angular/core';
import { Iproyectos } from '../interfaces/iproyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  protected proyectList : Iproyectos[] = [
    {
      "id": 1,
      "title": "Modelo de Robot",
      "description": "Modele el personaje de un robot basado en ROB y ClapTrap",
      "img": "../../../assets/img/Robot.png",
    },
    {
      "id": 2,
      "title": "Modelo del Sol",
      "description": "Modele una version del sol mas buena onda y graciosa",
      "img": "../../../assets/img/sol.jpg",

    },
    {
      "id": 3,
      "title": "Pagina de Borderlands",
      "description": "Diseñe una pagina web sobre mi videojuego favorito",
      "img": "../../../assets/img/borderlands.jpeg",

    },
    {
      "id": 4,
      "title": "Archimedes",
      "description": "En conjunto con mi equipo de trabajo de Proyectos, juntos logramos desarrollar la aplicacion de Realidad Aumentada de ArChimedes. Una aplicacion enfocada en el aprendisaje escolar mediante modelos 3D de realidad aumentada.",
      "img": "../../../assets/img/Archimedes Logo.png",

    },    {
      "id": 5,
      "title": "E.M.A.",
      "description": "Junto a mi equipo de proyectos, desarrollamos la aplicacion de EMA, una app que se enfoca en la administracion de nuestra economia personal",
      "img": "../../../assets/img/ema.webp",

    },
  ]
  
  
  constructor() { }

  getAllGameList() {
    return this.proyectList
  }

  getGameById(id: number) {
    return this.proyectList.find(value => value.id === id)
  }
}
