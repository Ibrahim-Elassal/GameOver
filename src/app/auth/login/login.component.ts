import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiError : string = '' ;
  isLoading : boolean = false ;

  constructor(private _AuthService :AuthService  , private _Router :Router) {

    if(!!localStorage.getItem("userToken")){
      this._Router.navigate (['/home'])
    }
  }

  loginForm:FormGroup = new FormGroup({
    email: new FormControl (null , [Validators.required ,Validators.email  ]),
    password:  new FormControl (null , [Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm ) ]),
  }) ;

  handleLogin(loginForm :FormGroup){
    this.isLoading = true ;
      if(loginForm.valid){
        this._AuthService.login(loginForm.value).subscribe({
          next: (response)=>{
            if(response.message === 'success'){
              localStorage.setItem('userToken', response.token) ;
              this._AuthService.decodeUserData();
              this.isLoading = false ;
              this._Router.navigate(['/home'])
            }
            else {
              this.isLoading = false ;
              this.apiError = response.message ;
            }
          },
          error: (err) =>{
            console.log(err)
          }
        })
      }
    }
    forgetPass(){
      alert("ههه اعمل اكونت جديد") ;
    }
  }
