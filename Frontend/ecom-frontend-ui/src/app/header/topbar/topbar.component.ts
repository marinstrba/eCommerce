import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  shadow = false;
  topOffset = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (window.innerWidth < 992) {
      this.shadow = scrollTop > 55;
      this.topOffset = 0; // Ensure navbar is always at the top on smaller screens
    } else {
      this.shadow = scrollTop > 55;
      this.topOffset = this.shadow ? -55 : 0;
    }
  }

}
