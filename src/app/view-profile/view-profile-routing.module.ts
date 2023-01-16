import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PayFeesComponent } from './pay-fees/pay-fees.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { RaiseQueryComponent } from './raise-query/raise-query.component';
import { ResultComponent } from './result/result.component';
import { ViewProfileComponent } from './view-profile.component';

const routes: Routes = [
  { path: '', component: ViewProfileComponent },
  {path: 'view_profile', component: PersonalInfoComponent},
  {path: 'result', component: ResultComponent},
  {path: 'payfees', component:PayFeesComponent},
  {path: 'raise', component:RaiseQueryComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'aboutus', component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewProfileRoutingModule { }
