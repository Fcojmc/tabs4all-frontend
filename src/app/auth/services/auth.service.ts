import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Login } from '../interfaces/login';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(register: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/auth/register`, register);
  }

  login(login: Login): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/auth/login`, login);
  }
}
