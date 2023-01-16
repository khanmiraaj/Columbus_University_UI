import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  showMyContainer: boolean = false;
  btnText:string = 'Personal Information'
  constructor() { }

  ngOnInit(): void {
  }
  togglePreview:boolean = true;
  studentDetails(){
 this.togglePreview = (this.togglePreview==true)?false:true;
 this.btnText = (this.btnText=='personal information')?'academic information':'personal information';
 }
}
