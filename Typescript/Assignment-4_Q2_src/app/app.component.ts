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

  projectName:string='';
  email:string='';
  projectStatus:string='';

  arr:Form[]=[];

  onSubmit(formDetails:any)
  {
   let arrUser=new Form();

   arrUser.projectName=formDetails.projectName;
   arrUser.email=formDetails.email;
   arrUser.projectStatus=formDetails.projectStatus;

   console.log("Project Name: "+arrUser.projectName);
   console.log("Email Id: "+arrUser.email);
   console.log("Project Status: "+arrUser.projectStatus)
  }

}
