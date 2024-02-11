import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor(private httpClient: HttpClient) { }

  getNumberOfProducts(): Observable<number>{
    return this.httpClient.get<number>("http://localhost:8080/product/available");
  }
}
