import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Login } from '../interfaces/login';
import { User } from '../interfaces/user';
import { LoginResponse, RegisterResponse } from '../interfaces/responses';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  register(register: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseUrl}/auth/register`, register);
  }

  login(login: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, login)
    .pipe(
      tap(resp => {
        if (resp.status === "Success") {
          localStorage.setItem('token', resp.data!.token);
        }
      })
    );
  }

  logout() {
    localStorage.clear();
  }

  getUserInfo(): Observable<User> {
    const url = `${this.baseUrl}/my-info`;
    return this.http.get<User>(url);
  }

  isAdmin(): Observable<boolean | any> {
    const url = `${this.baseUrl}/my-info`;
    return this.http.get<boolean | any>(url)
      .pipe(
        map( res => {
          if (res.is_admin === 1) {
            return true;
          }
          return false;
        })
      );
      
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  validateToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/check`;
    
    return this.http.get<boolean>(url)
      .pipe(
        map( res => {
          return true;
        }),
        catchError((err)=> of(err.ok)) 
      );
  }
}