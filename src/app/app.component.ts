import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,HomeComponent,NavegacionComponent,FooterComponent],
  templateUrl: `./app.component.html`,
  styleUrl: `./app.component.css`
})
export class AppComponent {
  title = 'tittle';
}
