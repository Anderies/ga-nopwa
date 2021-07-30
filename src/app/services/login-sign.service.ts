import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginSignService {


  resVerif: any;
  resRegis: any;
  constructor(private http: HttpClient) { }

  setRegis(username: any, useremail: any, userpassword: any) {
    var formData: any = new FormData();
    formData.append("name", username);
    formData.append("email", useremail);
    formData.append("password", userpassword);

    this.resRegis = this.http.post("https://mustseeum.com/henshuai/API/auth/register", formData)

    return this.resRegis;
  }

  // MAIN LOCAL
  verif(useremail: any, userpassword: any) {
    var formData: any = new FormData();
    formData.append("userlogin", useremail);
    formData.append("password", userpassword);
    this.resVerif = this.http.post('https://mustseeum.com/henshuai/API/auth/login', formData)

    return this.resVerif;

    // let message;
    // if (useremail == this.data_regis.email && userpassword == this.data_regis.password) {
    //   message = [true, "welcome sir"]
    //   return message
    // } else if (useremail !== this.data_regis.email && userpassword == this.data_regis.password) {
    //   message = [false, "Sorry wrong username"]
    //   return message
    // } else if (useremail == this.data_regis.email && userpassword !== this.data_regis.password) {
    //   message = [false, "Sorry wrong password"]
    //   return message
    // }
    // else {
    //   message = [false, "Sorry username and password wrong"]
    //   return message
    // }
  }
}
