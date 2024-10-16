import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { Igame } from '../../interfaces/igame';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink,],
  template: `
    <p-card header="{{gameCard.title}}" subheader="  {{gameCard.description}}" [style]="{ width: '300px',}">
    
    <ng-template pTemplate="header">
    <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <img alt="Card" [src]="gameCard.img" class="img-card" style="max-width: 100%; max-height: 100%; " />
    </div>


  `,
  
  
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() gameCard! : Igame
}
