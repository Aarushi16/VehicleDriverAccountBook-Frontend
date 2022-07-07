import { Component, OnInit } from '@angular/core';
import  { DataService }  from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   username:string='';
   password:string='';
   res:any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }
  handelUsername(event: any) { // without type info
    this.username = event.target.value ;
    console.log("user name",this.username)

  }
  handelPassword(event: any) { // without type info
    this.password = event.target.value ;

  }
  handelLogin(){
    console.log("user name len",this.username,this.username.length)
    // if(this.username.length === 0 && this.password.length === 0){
      if(this.username.length > 0 && this.password.length > 0  ){
      this.dataService.doLogin(this.username, this.password).subscribe((data) => {
        // const resSTR = JSON.stringify(res);
        // const resJSON = JSON.parse(resSTR);
        console.log("data",data)
        this.res=data;
        console.log("data 1",this.res.isSuccess)
        if (this.res.isSuccess == true) {
           
            localStorage.setItem('token', JSON.stringify(this.res.token));
            window.location.href = '/dashboard';
  
        } else {
            
            alert('Sorry Login Fail');
        }
  
    });
  
    }
    else{
      alert('Please Enter All Fields');
    }
   

  }
  handelSignup(){
    window.location.href = '/signup';

    
  }

}
