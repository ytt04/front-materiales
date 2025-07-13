import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Material } from '../models/material.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MaterialService {
  private baseUrl = 'http://localhost:8080/api/materiales';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  create(material: Material): Observable<any> {
    return this.http.post(this.baseUrl, material);
  }

  update(id: number, material: Material): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, material);
  }

  getByTipo(tipo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/tipo/${tipo}`);
  }

  getByCiudad(codigo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ciudad/${codigo}`);
  }

  getByFecha(fecha: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/fecha/${fecha}`);
  }


  getByFiltros(tipo?: string, ciudad?: string, fecha?: string): Observable<any> {
    let params: string[] = [];

    if (tipo) params.push(`tipo=${tipo}`);
    if (ciudad) params.push(`ciudad=${ciudad}`);
    if (fecha) params.push(`fecha=${fecha}`);

    const queryString = params.length ? '?' + params.join('&') : '';
    return this.http.get(`${this.baseUrl}/filtros${queryString}`);
  }

}