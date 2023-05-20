import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterStudent } from 'src/app/Model/RegisterStudent.model';
import { StudentResponse } from 'src/app/Model/StudentResponse.model';
import { ColumbusService } from 'src/app/service/columbus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  submitted:boolean = false;
  signupdata: RegisterStudent;
  invalid_cred: boolean= false;
  showMessage:boolean=false;
  constructor(private columbus_service: ColumbusService,
    private router:Router) { }

  ngOnInit(): void {
  }

  signupform = new FormGroup({

    universityRollNo: new FormControl('', [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    fatherName:  new FormControl('', Validators.required),
    motherName:  new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    courseName:  new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    semester: new FormControl('', Validators.required),
    batch: new FormControl('', Validators.required),
    emailAddress:new FormControl('',Validators.required),
    passingYear: new FormControl('', Validators.required),
    // password: new FormControl('',[ Validators.required, Validators.minLength(6)])
  })

  onSignUp(){
    this.submitted= true;
    if (!this.signupform.valid &&  this.signupform.status== 'INVALID') {
      return;
    }
    console.log(this.signupform.value)
    this.signupdata= this.signupform.value as RegisterStudent;
    this.saveStudentData();
  }


  saveStudentData(){
    
   this.columbus_service.registerStudent(this.signupdata).subscribe((res: StudentResponse)=>{
    if(res.statusCode.charAt(0)== 'F'){
      this.invalid_cred=true;
   }
   if(res.statusCode.charAt(0)== 'S'){
    this.showMessage=true;
    Swal.fire("Thank you...",'you are registered successfully','success');
    this.router.navigate(['signin']);
 }
   })
  }

  SignIn(){
    this.router.navigate(['signin'])
  }

}
