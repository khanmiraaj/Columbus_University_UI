import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
// import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'', component:SignInComponent},
  {path:'signin',component:SignInComponent},
  {path:'signup', component: SignUpComponent},
  // {path:'student-details/:unversityRollNo',component:StudentDetailsComponent},
  { path: 'student/view_profile/:unversityRollNo', loadChildren: () => import('./view-profile/view-profile.module').then(m => m.ViewProfileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
