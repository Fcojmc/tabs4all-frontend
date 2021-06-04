import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessResponse } from 'src/app/interfaces/success-response.interface';
import { environment } from 'src/environments/environment';
import { Favourites } from '../../interfaces/favourites.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<SuccessResponse> {
    const url = `${this.baseUrl}/users/my-info`;
    return this.http.get<SuccessResponse>(url);
  }

  updateUserInfo(user: FormData, id: string): Observable<SuccessResponse> {
    const url = `${this.baseUrl}/users/update/${id}`;
    console.log(user)
    return this.http.put<SuccessResponse>(url, user);
  }

  setFavouriteBand(BandId: string | undefined, UserId: string | undefined): Observable<SuccessResponse> {
    const favouriteBand: Favourites = { BandId, UserId };
    return this.http.post<SuccessResponse>(`${this.baseUrl}/set-user-favourites/bands`, favouriteBand);
  }

  unsetFavouriteBand(BandId: string | undefined, UserId: string | undefined): Observable<SuccessResponse> {
    const favouriteBand: Favourites = { BandId, UserId };
    return this.http.post<SuccessResponse>(`${this.baseUrl}/unset-user-favourites/bands`, favouriteBand);
  }

  setFavouriteTab(TabId: string | undefined, UserId: string | undefined): Observable<SuccessResponse> {
    const favouriteTab: Favourites = { TabId, UserId };
    return this.http.post<SuccessResponse>(`${this.baseUrl}/set-user-favourites/tabs`, favouriteTab);
  }

  unsetFavouriteTab(TabId: string | undefined, UserId: string | undefined): Observable<SuccessResponse> {
    const favouriteTab: Favourites = { TabId, UserId };
    return this.http.post<SuccessResponse>(`${this.baseUrl}/unset-user-favourites/tabs`, favouriteTab);
  }
}
