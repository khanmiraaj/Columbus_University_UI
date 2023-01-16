import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentResponse } from 'src/app/Model/StudentResponse.model';
import { ColumbusService } from 'src/app/service/columbus.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  universityRollNo:number;
  datas:any=[];
  studentResponse:StudentResponse=new StudentResponse();
  constructor(private columbusService:ColumbusService,
   private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.universityRollNo=this.route.snapshot.params['unversityRollNo'];
    this.columbusService.getStudentResult(this.universityRollNo).subscribe(data=>{
      this.datas=this.studentResponse=data
      console.log(this.datas.studentResultDto)
    })

  }

}
