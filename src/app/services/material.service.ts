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
}