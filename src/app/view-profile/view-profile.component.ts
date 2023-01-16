import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentResponse } from '../Model/StudentResponse.model';
import { ColumbusService } from '../service/columbus.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  showMyContainer: boolean = false;
  btnText:string = 'Personal Information'
  datas:any=[];
  studentResponse:StudentResponse=new StudentResponse();
  unversityRollNo:number;
  constructor(
    private columbusService:ColumbusService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.unversityRollNo=this.route.snapshot.params['unversityRollNo'];
    this.columbusService.getStudentDetails(this.unversityRollNo).subscribe(data=>{
      this.datas=this.studentResponse=data
      console.log(this.datas.studentDto)
    })
    // this.datas.this.studentResponse.map((num) => Math.sqrt(num));
  }
  togglePreview:boolean = true;
  studentDetails(){
 this.togglePreview = (this.togglePreview==true)?false:true;
 this.btnText = (this.btnText=='personal information')?'academic information':'personal information';
 }
}
