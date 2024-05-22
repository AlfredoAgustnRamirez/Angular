import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { PrincipalComponent } from '../principal/principal.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,RouterOutlet,NavegacionComponent,PrincipalComponent,FooterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
