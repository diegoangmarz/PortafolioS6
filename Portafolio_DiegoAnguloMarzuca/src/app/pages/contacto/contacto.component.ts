import { Component, inject } from '@angular/core';
import { CardComponent } from '../../componentes/card/card.component';
import { GamingService } from '../../services/gaming.service';
import { Igame } from '../../interfaces/igame';
import { Icontacto } from '../../interfaces/icontacto';
import { ContactoService } from '../../services/contacto.service';
import { ContactCardComponent } from '../../componentes/contact-card/contact-card.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ContactCardComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent{

  contactList: Icontacto[] = []
  contactoService : ContactoService =  inject(ContactoService)

  constructor() {
    this.contactList = this.contactoService.getAllGameList()
  }
  
}

