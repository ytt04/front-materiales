import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DepartamentoService {
  private baseUrl = 'http://localhost:8080/api/ubicacion/departamentos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  create(dep: any): Observable<any> {
    return this.http.post(this.baseUrl, dep);
  }
}
