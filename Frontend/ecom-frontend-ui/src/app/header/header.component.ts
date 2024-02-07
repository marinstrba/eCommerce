import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuVariable:boolean = false;
  menuIconVariable:boolean = false;
  isNavbarFixed:boolean = false;

  openMenu(){
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = ! this.menuIconVariable;
  }

    @HostListener('window:scroll')
    checkScroll() {
      const topBarHeight = 50; // Adjust this value to the actual height of your topbar
      this.isNavbarFixed = window.scrollY > topBarHeight;
    }
}
