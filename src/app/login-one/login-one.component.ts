import { Component, OnInit } from '@angular/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSignService } from '../services/login-sign.service';

@Component({
  selector: 'app-login-one',
  templateUrl: './login-one.component.html',
  styleUrls: ['./login-one.component.scss']
})
export class LoginOneComponent implements OnInit {

  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)])
  })

  email = ''
  password = ''
  response: any;
  message: any;
  constructor(private router: Router, private loginService: LoginSignService) { }

  ngOnInit(): void {
  }

  get emailInput() { return this.signin.get('email'); }

  get passwordInput() { return this.signin.get('password'); }

  gotoHome() {

    // console.log("submit", this.email, this.password)
    this.loginService.verif(this.email, this.password).subscribe((res: any) => {
      // console.log("this.data", res)
      if (res.message == "Success") {
        localStorage.setItem('user_id', JSON.stringify(res.data));
        this.router.navigateByUrl('home');
      } else {
        this.message = "Please check your input"
      }
    })
  }
  gotoLoginOne() {
    this.router.navigateByUrl('signup');
  }


}
