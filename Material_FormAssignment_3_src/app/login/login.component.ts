import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  FormSubmit!:FormGroup; 
  
  constructor(private fb:FormBuilder,private service:ServiceService) { }
  ngOnInit(): void {
    this.FormSubmit=this.fb.group({
      name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      password:['', Validators.required],
      })
    }

    onSubmit()
    {
    this.service.saveData(this.FormSubmit.value).subscribe();
    console.log(this.FormSubmit.value);
    window.location.reload();
    }
}
