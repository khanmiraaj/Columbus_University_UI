import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap} from 'rxjs';
import { RegisterStudent } from '../Model/RegisterStudent.model';
import { StudentResponse } from '../Model/StudentResponse.model';
import { Signin } from 'src/app/Model/signin.model';
import { catchError, retry } from 'rxjs/operators';
import { FeeDetails } from '../Model/FeeDetails';
@Injectable({
  providedIn: 'root'
})


export class ColumbusService {
  private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  constructor(private http: HttpClient) { }

   

baseUrl:String="http://localhost:8080/student/view_profile"

  registerStudent(student:RegisterStudent){
    return this.http.post("http://localhost:8080/student/new-student", student)
    .pipe((tap((result_json:StudentResponse) => JSON.stringify(result_json))))
    
  }

  loginStudent(student:Signin){
    return this.http.post("http://localhost:8080/student/validate-student", student)
    .pipe((tap((result_json:StudentResponse) => JSON.stringify(result_json))))
    
  }
  users() {
    this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getStudentDetails(id:number):Observable<StudentResponse>{
    return this.http.get<StudentResponse>(`${this.baseUrl}/${id}`);

  }

  getStudentResult(id:number):Observable<StudentResponse>{
    return this.http.get<StudentResponse>(`${this.baseUrl}/${id}/result`);

  }

  getStudentFeeDetails(id:number):Observable<StudentResponse>{
    return this.http.get<StudentResponse>(`${this.baseUrl}/${id}/payfees`);
  }

  updateStudentFeeDetails(feeDetails:FeeDetails):Observable<StudentResponse>{
    return this.http.post<StudentResponse>(`${this.baseUrl}/update_fee`,feeDetails);
  }

  getPosts() {
    return this.http.get(this.url);
  }

}
