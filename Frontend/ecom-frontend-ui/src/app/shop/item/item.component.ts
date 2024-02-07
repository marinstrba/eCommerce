import { Component, Input } from '@angular/core';
import { ProductDTO } from '../ProductDTO';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input()
  product!: ProductDTO;

}
