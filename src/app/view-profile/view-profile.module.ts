import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProfileRoutingModule } from './view-profile-routing.module';
import { ViewProfileComponent } from './view-profile.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ResultComponent } from './result/result.component';
import { PayFeesComponent } from './pay-fees/pay-fees.component';
import { HttpClientModule } from '@angular/common/http';
import { RaiseQueryComponent } from './raise-query/raise-query.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
@NgModule({
  declarations: [
    ViewProfileComponent,
    PersonalInfoComponent,
    ResultComponent,
    PayFeesComponent,
    RaiseQueryComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    ViewProfileRoutingModule,
    HttpClientModule,
  ]
})
export class ViewProfileModule { }
