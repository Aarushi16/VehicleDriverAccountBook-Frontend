import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cab-management';
  token: any = JSON.parse(localStorage.getItem('token') || '{}');
  showHeder:boolean=false;
  ngOnInit(){
        if(this.token !== ""){
            this.showHeder=true;
        }
        
    
  }



}
