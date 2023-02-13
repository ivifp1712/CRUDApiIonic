import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class libreriaService {
  constructor(private http: HttpClient) {}

  getLibros(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/libreria`
    );
  }

  getLibrosDetalles(id: string): Observable<any> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/libreria/${id}`
    );
  }
}