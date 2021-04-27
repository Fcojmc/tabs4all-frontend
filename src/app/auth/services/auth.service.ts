import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Login } from '../interfaces/login';
import { User } from '../interfaces/user';
import { AuthResponse } from '../interfaces/responses';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(register: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, register);
  }

  login(login: Login): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, login)
    .pipe(
      tap(resp => {
        if (resp.status === "Success") {
          localStorage.setItem('token', resp.data!.token);
        }
      })
    );
  }

  getUserInfo(): Observable<User> {
    const url = `${this.baseUrl}/my-info`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
    });

    return this.http.get<User>(url, {headers})
  }

  validateToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/check`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
    });
    
    return this.http.get<any>(url, { headers })
      .pipe(
        map( res => {
          return true;
        }),
        catchError(err => of(false))
      );
  }
}