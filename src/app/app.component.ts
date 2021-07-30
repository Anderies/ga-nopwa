import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as testAnimation from './animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // testAnimation
  ]
})
export class AppComponent {
  title = 'hen-shuai-app';
  isDesktop: boolean = true;
  isMobile: boolean = false;
  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  // }
  ngOnInit() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // true for mobile device
      this.isDesktop = false;
      this.isMobile = true;
    } else {
      // false for not mobile device
      this.isDesktop = true;
      this.isMobile = false;
      console.log("not mobile device");
    }
  }

}
