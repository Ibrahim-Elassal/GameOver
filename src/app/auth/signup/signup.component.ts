import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  apiError : string = '' ;
  isLoading : boolean = false ;
  constructor(private _AuthService : AuthService , private _Router :Router){}

  registerForm:FormGroup = new FormGroup({
    first_name: new FormControl (null, [Validators.required  , Validators.pattern(/^[a-zA-Z0-9\s]{3,50}$/) ]),
  last_name: new FormControl (null, [Validators.required  , Validators.pattern(/^[a-zA-Z0-9\s]{3,50}$/) ]),
    email: new FormControl (null , [Validators.required ,Validators.email  ]),
    age:  new FormControl (null, [ Validators.required  ,Validators.pattern(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/)]),
    password:  new FormControl (null , [Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm ) ]),
  }) ;

  handleRegister(registerForm: FormGroup){
    this.isLoading = true ;
    if(registerForm.valid){
      this._AuthService.registerForm(registerForm.value).subscribe({
        next: (response)=>{
          if(response.message === 'success'){
            this.isLoading = false ;
            this._Router.navigate(['/login'])
          }
          else {
            this.isLoading = false ;
            this.apiError = response.errors.email.message ;
          }
        },
        error: (err) =>{
            console.log(err)
        }
      })
    }
  }
}
