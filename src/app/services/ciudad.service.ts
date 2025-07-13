import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CiudadService {
  private baseUrl = 'http://localhost:8080/api/ubicacion/ciudades';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  create(ciudad: any): Observable<any> {
    return this.http.post(this.baseUrl, ciudad);
  }
}