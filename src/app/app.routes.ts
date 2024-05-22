import { Routes } from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { HomeComponent } from './components/home/home.component';
import { ComercializacionComponent } from './pages/comercializacion/comercializacion.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { AuthComponent } from './core/auth/components/auth.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'comercializacion', component: ComercializacionComponent},
    {path: 'terminos', component: TerminosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'registrar', component: RegistrarComponent},
];
