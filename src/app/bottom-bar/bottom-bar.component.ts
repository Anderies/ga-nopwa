import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  prediction: boolean = false
  home: boolean = false;
  history: boolean = false
  profile: boolean = false

  @Input() homeMenu: boolean = false;
  @Input() profileMenu: boolean = false;
  @Input() historyMenu: boolean = false;
  @Input() predictionMenu: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.predictionMenu) {
      this.prediction = this.predictionMenu
      this.home = false
      this.profile = false
      this.history = false
    }
    else if (this.historyMenu) {
      this.history = this.historyMenu
      this.home = false
      this.profile = false
      this.prediction = false
    } else if (this.profileMenu) {
      this.history = false
      this.home = false
      this.profile = this.profileMenu
      this.prediction = false
    } else if (this.homeMenu){
      this.history = false
      this.home = this.homeMenu
      this.profile = false
      this.prediction = false
    }
  }

  ngAfterViewInit() {
  }

  shortcut() {
    // this.profile = false
    // this.prediction = false
    // this.history = false
    // this.home = false
  }

  // BOTTOM BAR

  toogle() {
    // this.profile = false
    // this.prediction = false
    // this.history = false
    // this.home = true
    // this.router.navigate('/prediction');
    this.router.navigate(['/home']).then(() => {
      window.location.reload();

    });

  }

  tooglePrediction() {
    // this.prediction = true
    // this.home = false
    // this.history = false
    // this.profile = false
    this.router.navigate(['/prediction-dashboard']).then(() => {
      window.location.reload();
    });
  }

  toogleProfile() {

    // this.home = false
    // this.prediction = false
    // this.history = false
    // this.profile = true
    this.router.navigate(['/profile-dashboard']).then(() => {
      window.location.reload();
    });
  }

  toogleHistory() {
    // this.history = true
    // this.home = false
    // this.prediction = false
    // this.profile = false
    this.router.navigate(['/history-dashboard']).then(() => {
      window.location.reload();
    });
  }

}
