import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyForm, RegForm } from './model/form';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) {

  }
 url:string="http://localhost:3000";

 saveData(data:MyForm)
  {
      return this.http.post<RegForm>(this.url+"/data",data);
  }

 loginInfo(loginInfo:MyForm)
  {
      return this.http.post<MyForm>(this.url+"/login",loginInfo);
  }

  stepperInfo(stepperInfo:MyForm)
  {
      return this.http.post<MyForm>(this.url+"/stepperInfo",stepperInfo);
  }
}