import { Component, inject } from '@angular/core';
import { ProyectCardComponent } from '../../componentes/proyect-card/proyect-card.component';
import { ProyectosService } from '../../services/proyectos.service';
import { Iproyectos } from '../../interfaces/iproyectos';
@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [ProyectCardComponent],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
  proyectList: Iproyectos[] = []
  proyectosService : ProyectosService =  inject(ProyectosService)

  constructor() {
    this.proyectList = this.proyectosService.getAllGameList()
  }
}
