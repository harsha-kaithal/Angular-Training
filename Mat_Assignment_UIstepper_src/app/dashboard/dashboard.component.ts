import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstFormGroup!:FormGroup; 
  selected="";
  constructor(private service:ServiceService, private formBuilder:FormBuilder) {}

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  numbersOnly!:"^[0-9]$";

  ngOnInit():void{
    this.firstFormGroup=this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
    email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
    fname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
    mname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
    gender:['',Validators.required],
    dob:['',Validators.required],
    mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],

    fullname:['', Validators.required],
    AcNo:['', [Validators.required,Validators.pattern(this.numbersOnly)]],
    bankname:['', Validators.required],
    ifsc:['', Validators.required],
    iBanking:['', Validators.required],
    mobBanking:['', Validators.required],  

    pAddr:['', Validators.required],
    PermanentAddr:['', Validators.required]
  })
}
  
  onSubmit()
  {
  this.service.stepperInfo(this.firstFormGroup.value).subscribe();
  console.log(this.firstFormGroup.value);
  window.location.reload();
  }

  
}
