import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  title = 'Mat_Assignment';
  hide = true;
  FormSubmit!:FormGroup; 
  selected="";
  constructor(private fb:FormBuilder,private service:ServiceService) { }
  ngOnInit(): void {
    this.FormSubmit=this.fb.group({
      name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email:['',[Validators.required]],
      password:['', Validators.required],
      dob:['',Validators.required],
      gender:['',Validators.required],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      skills:['', Validators.required],
      })
    }

    onSubmit()
    {
    this.service.saveData(this.FormSubmit.value).subscribe();
    console.log(this.FormSubmit.value);
    window.location.reload();
    }
}
