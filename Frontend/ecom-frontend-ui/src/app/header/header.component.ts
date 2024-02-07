import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuVariable:boolean = false;
  menuIconVariable:boolean = false;
  isNavbarFixed:boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuVariable = false;
      }
    });
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menuIconVariable = !this.menuIconVariable;
  }

  @HostListener('window:scroll')
  checkScroll() {
    const topBarHeight = 50;
    this.isNavbarFixed = window.scrollY > topBarHeight;
  }
}
