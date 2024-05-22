import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  passwordVisible = false
  email: string = ''
  password: string = ''
  userId: string  = ''
  nombreUsr: string = ''
  router: any;

  constructor(
    private AuthService: AuthService,
  ){ }

  login(){
    const payload = {
      email: this.email,
      password: this.password
    } 
    
    this.AuthService.login(payload).subscribe((session => {
       console.log('Respuesta del servicio:', session);
     if (session) {
         localStorage.setItem('SESSION.localStorage', JSON.stringify(session));
         this.userId = session.userId;
         this.nombreUsr = session.nombreUsr;
         const userId = session.userId;
         localStorage.setItem('userId', userId);
         this.router.navigate(['/welcome']);
       } 
     }),
   );
  }
}
