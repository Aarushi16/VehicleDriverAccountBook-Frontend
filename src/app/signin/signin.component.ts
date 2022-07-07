import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FloatLabelType } from '@angular/material/form-field';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],

})
export class SigninComponent implements OnInit {

  username = '';
  password = '';
  conPassword = '';
  res: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }
  handelUsername(event: any) { // without type info
    this.username = event.target.value;
    console.log("user name", this.username)

  }
  handelPassword(event: any) { // without type info
    this.password = event.target.value;

  }
  handelConPassword(event: any) { // without type info
    this.conPassword = event.target.value;

  }
  handelSignup() {
    if (this.conPassword.length > 0 &&  this.username.length > 0 && this.password.length > 0  ){
      if (this.conPassword === this.password) {
        this.dataService.doSignup(this.username, this.password).subscribe((data) => {
          console.log("data", data)
          this.res = data;
          console.log("data 1", this.res.isSuccess)
          if (this.res.isSuccess == true) {
            alert('Signup Success !!!');
          } else {

            alert('Sorry Signup Fail !!!');
          }
        });

      }
      else {
        alert('Password and Confirm Password not match !!!');
      }
    }
    else {
      alert('Please Enter All Fields' !!!);
    }



  }
  handelSignin() {
    window.location.href = '/login';


  }

}
