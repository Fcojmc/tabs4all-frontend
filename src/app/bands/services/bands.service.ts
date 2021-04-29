import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Band } from '../../interfaces/band.interface';
import { SuccessResponse } from '../../interfaces/success-response.interface';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  private baseUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  create(band: FormData): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(`${this.baseUrl}/bands/create`, band);
  }

  getBands(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.baseUrl}/bands/all`)
  }

  getBandById(id: string): Observable<Band> {
    return this.http.get<Band>(`${this.baseUrl}/bands/${id}`);
  }

  updateBand(band: FormData): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(`${this.baseUrl}/bands/update`, band);
  }

  deleteBand(id: string): Observable<SuccessResponse> {
    return this.http.delete<SuccessResponse>(`${this.baseUrl}/bands/delete/${id}`);
  }
}
