import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiError, PaginatedResponse, Plant, SearchParams } from '../interface/trefle.interface';

@Injectable({
  providedIn: 'root'
})
export class TrefleService {
    private apiUrl = '/api/v1/plants';

  private apiKey = '_enhScRePk3gaBWfgxa59QBt4VpiE3K__Wak2OctWWk';

  constructor(private http: HttpClient) {}

  getPlants(params: SearchParams): Observable<PaginatedResponse<Plant> | ApiError> {
    let httpParams = new HttpParams().set('token', this.apiKey);

    if (params.q) {
      httpParams = httpParams.set('q', params.q);
    }
    if (params.page) {
      httpParams = httpParams.set('page', params.page.toString());
    }

    return this.http.get<PaginatedResponse<Plant> | ApiError>(this.apiUrl, { params: httpParams });
  }

  getPlantById(id: number): Observable<Plant | ApiError> {
    return this.http.get<Plant | ApiError>(`${this.apiUrl}/${id}`, {
      params: new HttpParams().set('token', this.apiKey)
    });
  }
}
