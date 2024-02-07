import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { ProductDTO } from './ProductDTO';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {

  items: Array<ProductDTO> = [];

  constructor(private shopService: ShopService){}
  ngOnInit():void {
    this.shopService.getProducts().subscribe(data => {
      this.items = data;
          console.log(this.items);
    })
  }
}
