import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Databinding-Assignment';
  name:string="";
  isDisable:boolean=false;

  reset(){
    this.name="";
  }
  
}
