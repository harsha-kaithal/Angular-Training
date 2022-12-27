import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyForm } from './model/form';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) {

  }
 url:string="http://localhost:3000";
 saveData(data:MyForm)
  {
      return this.http.post<MyForm>(this.url+"/data",data);
  }
}