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

  getUserTabs(): Observable<SuccessResponse> {
    const url = `${this.baseUrl}/user/tabs`;
    return this.http.get<SuccessResponse>(url);
  }

  updateUserInfo(user: FormData): Observable<SuccessResponse> {
    const url = `${this.baseUrl}/user/update`;
    return this.http.post<SuccessResponse>(url, user);
  }

  getFavouriteBands(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.baseUrl}/user/favourite-bands`);
  }

  getFavouriteTabs(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.baseUrl}/user/favourite-tabs`);
  }

  setFavouriteBand(id: string | undefined): Observable<SuccessResponse> {
    const favouriteBand: Favourites = { band_id: id };
    return this.http.post<SuccessResponse>(`${this.baseUrl}/user/set-favourite-band`, favouriteBand);
  }

  unsetFavouriteBand(id: string | undefined): Observable<SuccessResponse> {
    const favouriteBand: Favourites = { band_id: id};
    return this.http.post<SuccessResponse>(`${this.baseUrl}/user/unset-favourite-band`, favouriteBand);
  }

  setFavouriteTab(id: string | undefined): Observable<SuccessResponse> {
    const favouriteTab: Favourites = { tab_id: id };
    return this.http.post<SuccessResponse>(`${this.baseUrl}/user/set-favourite-tab`, favouriteTab);
  }

  unsetFavouriteTab(id: string | undefined): Observable<SuccessResponse> {
    const favouriteTab: Favourites = { tab_id: id };
    return this.http.post<SuccessResponse>(`${this.baseUrl}/user/unset-favourite-tab`, favouriteTab);
  }
}
