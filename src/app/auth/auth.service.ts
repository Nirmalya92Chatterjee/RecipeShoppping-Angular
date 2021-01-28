import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Observable, Subject, throwError,BehaviorSubject } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user";



export interface AuthResponse {
 
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({providedIn : 'root'})
export class AuthService {
 

  private tokenExpiration: any;
  constructor(private http: HttpClient,private route:Router) { }
  user = new BehaviorSubject<User>(null);

  SignUp(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZJt9lgfZQz5kQAowpHMY-MYg79mT6qt0',
      { email: email, password: password, returnSecureToken: true }).pipe(
        catchError(this.handleError), tap(resData => {
          this.handleAuthenticartion(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }))
  }

  SignIn(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZJt9lgfZQz5kQAowpHMY-MYg79mT6qt0',
      { email: email, password: password, returnSecureToken: true }).pipe(
        catchError(this.handleError),tap(resData => {
          this.handleAuthenticartion(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }))
    
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errMsg = 'An unknown error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errMsg);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errMsg = 'This email exists already.';
        break;
        case 'EMAIL_NOT_FOUND':
          errMsg = 'This email not exists!.';
        break;
        case 'INVALID_PASSWORD':
          errMsg = 'Wrong password!!.';
          break;
      
    }
    return throwError(errMsg);
  }

  private handleAuthenticartion(email: string, id:string,token: string, expiresIn: number) {
    const expiresdate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, id, token, expiresdate);
    localStorage.setItem('userData', JSON.stringify(user));
    this.autoLogout(expiresIn * 1000);
    //console.log(user);
    this.user.next(user);
  }

  logout() {
    this.user.next(null);

    if (this.tokenExpiration) {
      clearTimeout(this.tokenExpiration);
      this.tokenExpiration = null;
    }
    localStorage.removeItem('userData');
    this.route.navigate(['/auth']);

  

  }

  autoLogin() {
    const userData: { id:string, email: string; _token: string, _tokenExpirationDate: string } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(userData.id, userData.email, userData._token, new Date(userData._tokenExpirationDate));
    if (loadedUser.token) {
      this.user.next(loadedUser);
      console.log(userData);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      alert(expirationDuration);
      this.autoLogout(expirationDuration);
    }
  
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpiration = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

}