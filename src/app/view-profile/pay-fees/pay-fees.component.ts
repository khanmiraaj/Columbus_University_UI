import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeeDetails } from 'src/app/Model/FeeDetails';
import { StudentResponse } from 'src/app/Model/StudentResponse.model';
import { ColumbusService } from 'src/app/service/columbus.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-pay-fees',
  templateUrl: './pay-fees.component.html',
  styleUrls: ['./pay-fees.component.css']
})
export class PayFeesComponent implements OnInit {
  amoutn=false
  feesAmount=true;
  universityRollNo:number
  feeAmount:number;
  datas:any=[];
  studentResponse:StudentResponse=new StudentResponse();
  
  feeDetails:FeeDetails=new FeeDetails();
  

  constructor(private columbusService:ColumbusService,
    private route:ActivatedRoute) { }

  data={
    "feeAmount": 15000,
    "universityRollNo": "D21MCA12137",
    "lastdate": "23-10-2022",
    "lastFeeCharges": "15000",
    "extensionDetails": "jkjkjkj",
}

  ngOnInit(): void {
   
    this.universityRollNo=this.route.snapshot.params['unversityRollNo'];
    this.columbusService.getStudentFeeDetails(this.universityRollNo).subscribe(data=>{
      this.datas=this.studentResponse=data
      console.log(this.datas.feeDetailsDto)
    })


    // if(this.data.feeAmount>0){
    //   this.feesAmount=true;
    // }else{
    //   this.feesAmount=true;
    // }
  }

  updateFeeDetails(universityRollNo:String,feeAmount:number){
console.log("Check");

    this.feeDetails.universityRollNo=universityRollNo;
    console.log(universityRollNo);
    this.feeDetails.feeAmount=feeAmount;
    console.log(this.feeDetails);
    this.columbusService.updateStudentFeeDetails(this.feeDetails).subscribe(data=>{
      console.log(data);
    });


  }

}
