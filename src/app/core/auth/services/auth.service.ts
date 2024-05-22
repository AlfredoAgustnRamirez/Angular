import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../shared/endpoints.constant';
import { User, UserPayload } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  login(payload: UserPayload): Observable<User>{
    return this.http.post<User>(`${ENDPOINTS.api}user/login`, payload)
  }

}

