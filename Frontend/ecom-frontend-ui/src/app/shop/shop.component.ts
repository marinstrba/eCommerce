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
  isLoading: boolean = true;

  categoryCounts: { [category: string]: number } = {};
  categories = ['MMA', 'Box', 'Wrestling', 'BJJ', 'Judo'];


  constructor(private shopService: ShopService){}

  ngOnInit(): void
  {
    this.shopService.getProducts().subscribe(data => {
      this.items = data;
      this.isLoading = false;
    }, error => {
        this.isLoading = false;
     });

     this.categories.forEach(category => {
       this.shopService.countByCategory(category).subscribe(
         count => this.categoryCounts[category] = count
       );
     });
  }
}
