import { Component, inject } from '@angular/core';
import { CardComponent } from '../../componentes/card/card.component';
import { GamingService } from '../../services/gaming.service';
import { Igame } from '../../interfaces/igame';
import { Ihabilidades } from '../../interfaces/ihabilidades';
import { HabilidadesService } from '../../services/habilidades.service';
import { HabilityCardComponent } from '../../componentes/hability-card/hability-card.component';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [HabilityCardComponent,],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {


  habilityList: Ihabilidades[] = []
  habilidadesService : HabilidadesService =  inject(HabilidadesService)

  constructor() {
    this.habilityList = this.habilidadesService.getAllGameList()
  }
}
