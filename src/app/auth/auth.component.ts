import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse, AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl : './auth.component.html'
})

export class AuthComponnent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
   authObj : Observable<AuthResponse>;

  constructor(private http:HttpClient,private authser:AuthService,private router:Router){}

  OnSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  OnSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    
    const email = form.value.email;
    const password = form.value.password;
    this.error = null;

    this.isLoading = true;

    if (!this.isLoginMode) {
      this.authObj = this.authser.SignUp(email, password);
    }
    else
    {
      this.authObj = this.authser.SignIn(email, password);
    }

    this.authObj.subscribe(resData => {
       
      this.isLoading = false;
      console.log(resData);
      this.router.navigate(['/recipe']);
    }, errormsg => {
        this.error = errormsg;
        this.isLoading = false;
       
    })
    
    form.reset();
  }


}