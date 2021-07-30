import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSignService } from '../services/login-sign.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;
  name = '';
  email = '';
  password = '';
  msg: any;

  constructor(private router: Router, private loginService: LoginSignService) { }

  ngOnInit(): void {
  }

  gotoLoginOne() {
    this.router.navigateByUrl('login');
  }

  gotoHome() {
  }

  signUp() {
    this.loginService.setRegis(this.name, this.email, this.password).subscribe((res: any) => {
      if (res.message == "Success") {
        this.router.navigateByUrl('login');
      } else {
        this.msg = "Please Carefully Input Your Data"
        // alert(this.msg)
      }
    })
  }
}
