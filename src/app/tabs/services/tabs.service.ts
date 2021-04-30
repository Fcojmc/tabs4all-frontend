import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuccessResponse } from '../../interfaces/success-response.interface';
import { Tab } from '../../interfaces/tab.interface';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createTab(tab: Tab): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(`${this.baseUrl}/tabs/create`, tab);
  }


  getTabs(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.baseUrl}/tabs/all`);
  }

  getTabById(id: string): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.baseUrl}/tabs/${id}`);
  }

  updateTab(tab: Tab): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(`${this.baseUrl}/tabs/update`, tab);
  }

  deleteTab(id: string): Observable<SuccessResponse> {
    return this.http.delete<SuccessResponse>(`${this.baseUrl}/tabs/delete/${id}`);
  }
}
