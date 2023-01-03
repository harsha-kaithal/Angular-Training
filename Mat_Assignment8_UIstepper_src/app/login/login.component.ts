import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  LoginForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    })
  }

  Login() {

    this.http.get<any>("http://localhost:3000/login").subscribe(response => {
        const user = response.find((ImUser: any) => {
          return ImUser.email === this.LoginForm.value.email && ImUser.password === this.LoginForm.value.password
        });

        if (user) {
          alert("Login Successful");
          this.LoginForm.reset();
          this.router.navigate(['dashboard'])
        }
        else {
          alert("Only Valid user can Login");
        }
      }, err => {
        alert("Something went Wrong");
    })
    // this.service.loginInfo(this.LoginForm.value).subscribe();
    // alert("Login Successful");
    // console.log(this.LoginForm.value);
    // window.location.reload();
  }
}
