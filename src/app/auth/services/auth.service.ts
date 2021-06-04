import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Login, LoginResponse } from '../../interfaces/login.interfaces';
import { User } from '../../interfaces/user.interface';
import { SuccessResponse } from '../../interfaces/success-response.interface';
import { tap, map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  register(register: User): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(`${this.baseUrl}/users/register`, register);
  }

  login(login: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, login)
    .pipe(
      tap(resp => {
        if (resp.success) {
          localStorage.setItem('token', resp.data!);
        }
      })
    );
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  isAdmin(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/admin-check`;
    return this.http.get<boolean>(url)  
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  validateToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/check`;
    
    return this.http.get<boolean>(url)
      .pipe(
        map( res => true),
        catchError((err)=> of(err.ok)) 
      );
  }
}