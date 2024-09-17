import { Injectable } from '@angular/core';
import { Ihabilidades } from '../interfaces/ihabilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  protected habilityList : Ihabilidades[] = [
    {
      "id": 1,
      "title": "Programador FrontEnd",
      "description": "Un programador frontend se especializa en crear la interfaz de usuario de sitios web y aplicaciones web usando HTML, CSS y JavaScript, junto con frameworks como React, Angular o Vue.js. También tiene habilidades en diseño UX/UI y optimización de rendimiento para mejorar la experiencia del usuario y la eficiencia del sitio.",
      "img": "../../../assets/img/frontend.jpg",

    },
    {
      "id": 2,
      "title": "Modelador 3D",
      "description": "se centra en crear representaciones tridimensionales de objetos y entornos usando software especializado como Blender, Maya o 3ds Max. Debe tener habilidades en modelado, texturizado, iluminación y animación para producir gráficos realistas o estilizados según las necesidades del proyecto.",
      "img": "../../../assets/img/maya.avif",

    },
    {
      "id": 3,
      "title": "Programador Web",
      "description": "se enfoca en desarrollar aplicaciones y sitios web utilizando lenguajes como HTML, CSS y JavaScript, junto con frameworks como React, Angular o Vue.js. También gestiona la lógica del lado del servidor con tecnologías como PHP, Python o Node.js, asegurando que las aplicaciones sean interactivas, eficientes y seguras.",
      "img": "../../../assets/img/programador-web.webp",

    },
  ]
  
  
  constructor() { }

  getAllGameList() {
    return this.habilityList
  }

  getGameById(id: number) {
    return this.habilityList.find(value => value.id === id)
  }
}
