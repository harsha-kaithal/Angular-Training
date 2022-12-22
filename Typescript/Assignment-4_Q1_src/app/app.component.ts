import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Form } from './model/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';

  email:string='';
  subscription:string='';
  password:string='';

  subscriptions = ['Basic', 'Advanced', 'Pro'];

  arr:Form[]=[];
  

  loginUser(item:any){
    console.log(item);
  }

  onSubmit(formDetails:any)
  {
   let arrUser=new Form();

   arrUser.email=formDetails.email;
   arrUser.subscription=formDetails.subscription;
   arrUser.password=formDetails.password;

   this.arr.push(arrUser);
  }

}
