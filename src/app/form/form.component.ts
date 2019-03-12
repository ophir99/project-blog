import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  displaySigninForm = true;
  displaySignupForm = false;
  signUpForm: FormGroup;
  @Output()
  changeHeading  = new EventEmitter();
  constructor(
    private userS: UserService,
    private fb: FormBuilder
  ) { 
    this.signUpForm = this.fb.group({
      email: [],
      password: [],
      confirmP: []
    })

    // this.signUpForm  = this.fb.group({
    //   email: [],
    //   password: []
    // })
  }

  ngOnInit() {
    this.changeHeading.emit("Login")
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
    this.userS.createUser(this.signUpForm.value)
                .subscribe(
                  res=>{
                    console.log(res)
                  }
                )
  }

}
