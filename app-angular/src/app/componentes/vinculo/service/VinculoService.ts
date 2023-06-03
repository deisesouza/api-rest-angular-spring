
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vinculo } from '../model/Vinculo';


@Injectable()
export class VinculoService {
url = "http://localhost:8001/vinculo";
constructor(private http: HttpClient) {
}

getVinculo(): Observable<Vinculo[]>{
  return this.http.get<Vinculo[]>(this.url);
}

createVinculo(element: Vinculo): Observable<Vinculo> {
  return this.http.post<Vinculo>(this.url, element);
}

}
