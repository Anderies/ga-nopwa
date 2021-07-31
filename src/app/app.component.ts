import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'


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

  public showOverlay = true;

  constructor(private router: Router) {

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

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

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }

}
