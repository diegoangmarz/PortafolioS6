import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Component, Input } from '@angular/core';
import { Ihabilidades } from '../../interfaces/ihabilidades';


@Component({
  selector: 'app-hability-card',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink,],
  template: `
    <p-card header="{{habilityCard.title}}" subheader="  {{habilityCard.description}}" [style]="{ width: '300px',}">
    
    <ng-template pTemplate="header">
    <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <img alt="Card" [src]="habilityCard.img" class="img-card" style="max-width: 100%; max-height: 100%; " />
    </div>


  `,
  
  
  styleUrl: './hability-card.component.css'
})


export class HabilityCardComponent {
  @Input() habilityCard ! : Ihabilidades
}