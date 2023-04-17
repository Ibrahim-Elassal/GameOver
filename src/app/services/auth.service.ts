import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null) ;

  constructor(private _HttpClient : HttpClient , private _Router : Router) {
    if(localStorage.getItem('userToken') !== null ){
      this.decodeUserData() ;
    }
  }

  decodeUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodeToken : any = jwtDecode(encodedToken);
    // this.userData = decodeToken ; // or
    this.userData.next(decodeToken)  ;
  }

  registerForm (userData : object ):Observable <any>{
      return this._HttpClient.post('https://sticky-note-fe.vercel.app/signup' , userData)
  }

  login (userData : object ):Observable <any>{
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signIn' , userData)
}

logOut(){
  localStorage.removeItem('userToken') ;
  this.userData.next(null);
  this._Router.navigate(['/login'])
}

}
