import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from './model/employee';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";  
  
  emp = new Employee();
  
  empId = new Subject(); //Subject gives upcoming value
  setEmpId(id:any){
    console.log(id);
    this.empId.next(id); //data stored to Observable
  }

  getEmployeeById(id: any){
    return this.http.get(this.url+"/getAllData/"+id);
  }
  
  GetAllData():Observable<Employee[]>
  {
     return this.http.get<Employee[]>(this.url+"/getAllData");
  }

  EditEmployeeDetails(id:any,emp:Employee):Observable<Employee>
  {
      return this.http.put<Employee>(this.url+"/getAllData/"+id,emp);
  }

  SaveEmployeeDetails(emp:Employee)
  {
      return this.http.post<Employee>(this.url+"/getAllData",emp);
  }


  DeleteEmployee(id:number)
  {
     return this.http.delete(this.url+"/getAllData/"+id);
  }


}


