import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {User} from './../user.service';
interface Response{
  result: User[];
  token: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  
  displaySigninForm = true;
  displaySignupForm = false;
  signUpForm: FormGroup;
  signInForm: FormGroup;
  @Output()
  changeHeading  = new EventEmitter();
  constructor(
    private userS: UserService,
    private fb: FormBuilder,
    private snackB: MatSnackBar,
    private router: Router
  ) { 
    this.signUpForm = this.fb.group({
      email: ['dshjhjh', [Validators.email]],
      password: ['', this.passwordValidator],
      confirmP: [{value:'', disabled: true}, [Validators.required]]
    });

    this.signInForm = this.fb.group({
      email: ["", Validators.email],
      password: ['', this.passwordValidator]
    })
    this.signUpForm.get('confirmP').valueChanges.subscribe(
      (val)=>{
        
        this.checkValidity(val);
      }
    )

    this.signUpForm.get('password').valueChanges.subscribe(
      (value)=>{
        console.log("==>",value);
        if(this.signUpForm.get('password').valid){
          
          this.signUpForm.get('confirmP').enable();
        }
        else{
          this.signUpForm.get('confirmP').disable();

        }
      }
    )
    
  }

  ngOnInit() {
    this.changeHeading.emit("Login");
    
  }

  showSignInForm(){
    this.displaySigninForm = true;
    this.displaySignupForm = false;
    this.changeHeading.emit("Login");
  }

  showSignUpForm(){
    this.displaySignupForm = true;
    this.displaySigninForm = false;
    this.changeHeading.emit("Create Account");
  }

  createData(){
    this.signUpForm.updateValueAndValidity();
    debugger;
    if(this.signUpForm.invalid){
      this.snackB.open("Please provide correct values to form");
      setTimeout(()=>{
        this.snackB.dismiss();
      }, 3000);
      return null;
    }
    this.userS.createUser(this.signUpForm.value)
                .subscribe(
                  res=>{
                    this.snackB.open("created  successfully...", "", {
                      duration: 1000
                    })
                    console.log(res)
                  }
                )
  }

  passwordValidator(fControl){
    const exp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    console.log(fControl.value)
    if(exp.test(fControl.value)){
      return null;
    }else{
      return {
        passwordError: true
      }
    }
  }

  confirmPasswordValidator(fControl: FormControl){
    const password = fControl.parent.get('password').value;
    
      if(fControl.value !== password){

        return {  
          cPasswordError: true
        }
      }
    

    // return null;
    // const error = {
    //   cPasswordError: true
    // }
    // return fControl.value !== this.signUpForm.get('password').value ?
    //         error:
    //         null
    return null;
  }


  checkValidity(val){

    const fControl: AbstractControl = this.signUpForm.get('confirmP');
    fControl.setValidators(this.confirmPasswordValidator);
    console.log(fControl.valid);
  }

  loguser(){
    this.userS.logUser(this.signInForm.value)
      .subscribe(
        (res: Response) =>{
          console.log(res);
          this.snackB.open("User logged in", "", {
            duration: 1000
          });
          sessionStorage.setItem("appToken", res.token);
          this.router.navigate(["dashboard"])
        }
      )
  }

  
}
