import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Employee } from 'src/app/model/employee';
import { CommonserviceService } from 'src/app/commonservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  constructor(private fb: FormBuilder, private cs: CommonserviceService) { }

  e!: Employee[]
  employeeForm!: FormGroup;
  editClicked: boolean = false;

  namepattern!: "^[a-zA-Z ]{2,20}$";

  ngOnInit(): void {

    this.employeeForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern(this.namepattern)]],
      addr: ['', [Validators.required]],
      mob: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],

    })


    this.cs.empId.subscribe(data => {
      console.log(data);
      this.editClicked = true;
      this.cs.getEmployeeById(data).subscribe({
        next: (res: any) => {
          this.employeeForm = this.fb.group({
            id: res.id,
            name: res.name,
            addr: res.addr,
            mob: res.mob

          })
        }
      });
    })

  }


  onSubmit() {
    if (this.editClicked) {
      this.cs.EditEmployeeDetails(this.employeeForm.value.id, this.employeeForm.value).subscribe({
        next: (res) => {
          window.location.reload();
        }
      })
    }

    else {
      if (this.employeeForm.valid) {
        this.cs.SaveEmployeeDetails(this.employeeForm.value).subscribe();
        window.location.reload();
      }
    }
  }


  reset() {
    this.employeeForm = this.fb.group({
      id: '',
      name: '',
      addr: '',
      mob: ''

    })

  }
}