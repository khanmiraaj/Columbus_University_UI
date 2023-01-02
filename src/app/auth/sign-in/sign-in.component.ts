import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Signin } from 'src/app/Model/signin.model';
import { StudentResponse } from 'src/app/Model/StudentResponse.model';
import { ColumbusService } from 'src/app/service/columbus.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  submitted: boolean = false;
  logindata: Signin;
  invalid_cred:boolean= false;

  constructor(private columbus_service: ColumbusService) { }

  ngOnInit(): void {
  }


  loginform = new FormGroup({

    universityRollNo: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('',[ Validators.required, Validators.minLength(6)])
  })

  onSignIn() {
    this.submitted = true;
    console.log(this.loginform);
    if (!this.loginform.valid &&  this.loginform.status== 'INVALID') {
      return;
    }
    // this.loginstudent= JSON.parse(JSON.stringify(this.loginform.value));
    // console.log("object"+ JSON.stringify(this.loginstudent))
    this.logindata=  this.loginform.value as Signin;
    console.log(this.logindata)
   // this.LoginStudentData(this.logindata)
   this.LoginStudentData();
  }

  LoginStudentData(){
   
   this.columbus_service.loginStudent(this.logindata).subscribe((res: StudentResponse)=>{
     
     if(res.statusCode.charAt(0)== 'F'){
        this.invalid_cred=true;
     }
   })
  }


}
