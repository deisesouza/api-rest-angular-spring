import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../model/Estabelecimento';

@Injectable()
export class EstabelecimentoService {
  url = "http://localhost:8001/estabelecimento";
  constructor(private http: HttpClient) {
  }

  getEstabelecimento(): Observable<Estabelecimento[]>{
    return this.http.get<Estabelecimento[]>(this.url);
  }

  createEstabelecimento(element: Estabelecimento): Observable<Estabelecimento> {
    return this.http.post<Estabelecimento>(this.url, element);
  }

  editEstabelecimento(element: Estabelecimento): Observable<Estabelecimento> {
    return this.http.put<Estabelecimento>(this.url, element);
  }

  deleteEstabelecimento(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}?id=${id}`);
  }

}
