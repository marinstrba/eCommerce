import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuVariable:boolean = false;
  menuIconVariable:boolean = false;

  openMenu(){
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = ! this.menuIconVariable;
  }
}
