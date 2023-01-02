import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap} from 'rxjs';
import { RegisterStudent } from '../Model/RegisterStudent.model';
import { StudentResponse } from '../Model/StudentResponse.model';
import { Signin } from 'src/app/Model/signin.model';
@Injectable({
  providedIn: 'root'
})


export class ColumbusService {

  constructor(private http: HttpClient) { }

   



  registerStudent(student:RegisterStudent){
    return this.http.post("http://localhost:8080/student/new-student", student)
    .pipe((tap((result_json:StudentResponse) => JSON.stringify(result_json))))
    
  }

  loginStudent(student:Signin){
    return this.http.post("http://localhost:8080/student/validate-student", student)
    .pipe((tap((result_json:StudentResponse) => JSON.stringify(result_json))))
    
  }


}
