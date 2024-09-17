import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-fw pi-file',
              routerLink: '/'
          },
          {
            label: 'Sobre Mi',
            icon: 'pi pi-fw pi-file',
            routerLink: '/SobreMi'
          },
          {
            label: 'Habilidades',
            icon: 'pi pi-fw pi-file',
            routerLink: '/Habilidades'
          },
          {
            label: 'Portafolio',
            icon: 'pi pi-fw pi-file',
            routerLink: '/Portafolio'
          },
          {
            label: 'Contacto',
            icon: 'pi pi-fw pi-file',
            routerLink: '/Contacto'
          },

      ];
  }
}
