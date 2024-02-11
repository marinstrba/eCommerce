import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDTO } from './ProductDTO';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Array<ProductDTO>>{
    return this.httpClient.get<Array<ProductDTO>>('http://localhost:8080/product/get');
  }

  countByCategory(category: string): Observable<number>{
    return this.httpClient.get<number>(`http://localhost:8080/product/available/category/${category}`);
  }

}
