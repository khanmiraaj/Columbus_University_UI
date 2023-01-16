import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-fees',
  templateUrl: './pay-fees.component.html',
  styleUrls: ['./pay-fees.component.css']
})
export class PayFeesComponent implements OnInit {
  amoutn=false
  feesAmount=false;
  constructor() { }

  data={
    "feeAmount": 15000,
    "universityRollNo": "D21MCA12137",
    "lastdate": "23-10-2022",
    "lastFeeCharges": "15000",
    "extensionDetails": "jkjkjkj",
}

  ngOnInit(): void {
    if(this.data.feeAmount>0){
      this.feesAmount=false;
    }else{
      this.feesAmount=true;
    }
  }

}
