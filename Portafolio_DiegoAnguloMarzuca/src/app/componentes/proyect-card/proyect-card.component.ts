import { Component, Input } from '@angular/core';
import { Iproyectos } from '../../interfaces/iproyectos';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-proyect-card',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink,],
  template: `
    <p-card header="{{proyectCard.title}}" subheader="  {{proyectCard.description}}" [style]="{ width: '300px',}">
    
    <ng-template pTemplate="header">
    <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <img alt="Card" [src]="proyectCard.img" class="img-card" style="max-width: 100%; max-height: 100%; " />
    </div>


  `,
  
  
  styleUrl: './proyect-card.component.css'
})


export class ProyectCardComponent {
  @Input() proyectCard ! : Iproyectos
}
