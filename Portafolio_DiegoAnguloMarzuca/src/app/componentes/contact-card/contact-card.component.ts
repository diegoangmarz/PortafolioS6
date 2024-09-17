import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Icontacto } from '../../interfaces/icontacto';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink,],
  template: `
    <p-card header="{{contactCard.title}}" subheader="  {{contactCard.description}}" [style]="{ width: '300px',}">
    
    <ng-template pTemplate="header">
    <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <img alt="Card" [src]="contactCard.img" class="img-card" style="max-width: 100%; max-height: 100%; " />
    </div>


  `,
  
  styleUrl: './contact-card.component.css'
})


export class ContactCardComponent {
  @Input() contactCard ! : Icontacto
}