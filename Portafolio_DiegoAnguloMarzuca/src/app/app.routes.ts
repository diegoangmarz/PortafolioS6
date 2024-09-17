import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'SobreMi',
        component: SobreMiComponent
    },
    {
        path: 'Habilidades',
        component: HabilidadesComponent
    },
    {
        path: 'Portafolio',
        component: PortafolioComponent
    },
    {
        path: 'Contacto',
        component: ContactoComponent
    },
];
