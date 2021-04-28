import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Band } from '../interfaces/band.interface';
import { BandCreateResponse, GetBandsResponse } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  private baseUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  create(band: FormData): Observable<BandCreateResponse> {
    return this.http.post<BandCreateResponse>(`${this.baseUrl}/bands/create`, band);
  }

  getBands(): Observable<GetBandsResponse> {
    return this.http.get<GetBandsResponse>(`${this.baseUrl}/bands/all`)
  }

  getBandById(id: string): Observable<Band> {
    return this.http.get<Band>(`${this.baseUrl}/bands/${id}`);
  }

  updateBand(band: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/bands/update`, band);
  }

  deleteBand(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/bands/delete/${id}`);
  }
}
