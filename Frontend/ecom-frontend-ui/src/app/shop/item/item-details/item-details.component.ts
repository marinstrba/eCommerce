import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { ShopService } from '../../shop.service';
import { ProductDTO } from '../../ProductDTO';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  productName: string | null = null;
  item!: ProductDTO;
  relatedItems: Array<ProductDTO> = [];

  categoryCounts: { [category: string]: number } = {};
  categories = ['MMA', 'Box', 'Wrestling', 'BJJ', 'Judo'];

  constructor (private itemService: ItemService,
              private route: ActivatedRoute,
              private shopService: ShopService) {}
  ngOnInit(): void {

     this.categories.forEach(category => {
       this.shopService.countByCategory(category).subscribe(
         count => this.categoryCounts[category] = count
       );
     });

      this.productName = this.route.snapshot.paramMap.get('productName');

    if (this.productName) {
      this.itemService.getProduct(this.productName).subscribe(data => {
        this.item = data;
        if (this.item.productCategory) {
          this.shopService.getProductByCategory(this.item.productCategory).subscribe(relatedData => {
            this.relatedItems = relatedData.filter(relatedItem => relatedItem.productName !== this.productName);
          });
        }
      });
    }



  }
}
