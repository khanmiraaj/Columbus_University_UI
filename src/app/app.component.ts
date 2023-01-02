import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterStudent } from './Model/RegisterStudent.model';
import { StudentResponse } from './Model/StudentResponse.model';
import { ColumbusService } from './service/columbus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ColumbusUniversity';
   constructor(private columbus_service:ColumbusService){}

  student1:RegisterStudent={
    "universityRollNo": "D21MCA12222",
    "firstName": "rohi",
    "lastName": "gour",
    "course": "UG",
    "courseName": "B.tech",
    "dateOfBirth": "06-12-1998",
    "semester": "4",
    "password": "b@tech"
};

   saveStudentData(){
     stude:Object= JSON.parse(JSON.stringify(this.student1));
    
    this.columbus_service.registerStudent(this.student1).subscribe((res: StudentResponse)=>{
      alert(res.description);
      console.log(res.description);
    })
   }
}
