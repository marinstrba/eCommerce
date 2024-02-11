import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../ProductDTO';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  getProduct(name: string): Observable<ProductDTO> {
    return this.httpClient.get<ProductDTO>(`http://localhost:8080/product/get/${name}`);
  }


}
