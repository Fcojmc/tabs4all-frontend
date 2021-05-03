import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessResponse } from 'src/app/interfaces/success-response.interface';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { Favourites } from '../../interfaces/favourites.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<User> {
    const url = `${this.baseUrl}/my-info`;
    return this.http.get<User>(url);
  }

  getFavouriteBands(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.baseUrl}/user/favourite-bands`);
  }

  getFavouriteTabs(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.baseUrl}/user/favourite-tabs`);
  }

  setFavouriteBand(id: string | undefined): Observable<SuccessResponse> {
    const favouriteBand: Favourites = { band_id: id }
    return this.http.post<SuccessResponse>(`${this.baseUrl}/user/set-favourite-band`, favouriteBand);
  }

  unsetFavouriteBand(id: string | undefined): Observable<SuccessResponse> {
    const favouriteBand: Favourites = { band_id: id}
    return this.http.post<SuccessResponse>(`${this.baseUrl}/user/unset-favourite-band`, favouriteBand);
  }
}
