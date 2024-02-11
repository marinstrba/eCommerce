import { Component, OnInit } from '@angular/core';
import {FactsService} from './facts.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.css'
})
export class FactsComponent implements OnInit {

  numberOfProducts: number = 0;
  constructor (private factsService: FactsService){}

    ngOnInit():void {
      this.factsService.getNumberOfProducts().subscribe(data => {
        this.numberOfProducts = data;
      })
    }
}
