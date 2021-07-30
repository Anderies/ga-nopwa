import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent implements OnInit {
  profileMenuSend: boolean = true;
  local_data:any = {
    user_name: 'example',
    user_email: 'example@gmail.com'
  };
  temp:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.temp = this.getLocalStorage()
    this.local_data = {
      user_name : this.temp['user_name'],
      user_email : this.temp['user_email']
    }
    console.log("this.local_data",this.local_data)
  }

  getLocalStorage() {
    let b: any;
    b = localStorage.getItem('user_id');
    b = JSON.parse(b);
    return b;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login-signup'])
  }

}
