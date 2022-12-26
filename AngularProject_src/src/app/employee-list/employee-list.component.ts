import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  constructor(private cs:CommonserviceService) { }

  emp!:Employee[];

  ngOnInit(): void {

    this.cs.GetAllData().subscribe(list =>{
      this.emp=list
    })
  }

  edit(id: any){
    console.log(id);
    this.cs.setEmpId(id);
  }

  deleteDataById(id :any)
  {
    this.cs.DeleteEmployee(id).subscribe( data =>{
    console.log(data);
    window.location.reload();
    })
  }


}
