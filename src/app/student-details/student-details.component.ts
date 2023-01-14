import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentResponse } from '../Model/StudentResponse.model';
import { ColumbusService } from '../service/columbus.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id:number;

  studentResponse:StudentResponse=new StudentResponse();

  constructor(private columbus_service:ColumbusService,
    private route:ActivatedRoute,
   private router:Router ) { }

  ngOnInit(): void {

   this.id=this.route.snapshot.params['unversityRollNo'];
    this.columbus_service.getStudentDetails(this.id).subscribe(data=>{
     this.studentResponse=data
     console.log(this.studentResponse);
    })
  }




}
