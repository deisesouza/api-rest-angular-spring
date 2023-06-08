import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profissional } from '../model/Profissional';


@Injectable()
export class ProfissionalService {
  url = "http://localhost:8001/profissional";
  constructor(private http: HttpClient) {
  }

  getProfissional(): Observable<Profissional[]>{
    return this.http.get<Profissional[]>(this.url);
  }

  createProfissional(element: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(this.url, element);
  }

  editProfissional(element: Profissional): Observable<Profissional> {
    return this.http.put<Profissional>(this.url, element);
  }

  deleteProfissional(id: number): Observable<any> {
    return this.http.delete<Profissional>(`${this.url}?id=${id}`);
  }

}
