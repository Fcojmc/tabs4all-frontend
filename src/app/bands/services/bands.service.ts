import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Band } from '../interfaces/band.interface';
import { BandCreateResponse } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  private baseUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  create(band: FormData): Observable<BandCreateResponse> {
    return this.http.post<BandCreateResponse>(`${this.baseUrl}/bands/create`, band);
  }
}
