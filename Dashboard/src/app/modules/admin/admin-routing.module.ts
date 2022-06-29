import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InternshipComponent } from './components/internship/internship.component';
import { LogicBuildingComponent } from './components/logic-building/logic-building.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PpcComponent } from './components/ppc/ppc.component';
import { RawdataComponent } from './components/rawdata/rawdata.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserdataComponent } from './components/userdata/userdata.component';

const routes: Routes = [
  {
    path:'',component:AdminDashboardComponent,
    children:[
      {path:'internship',component:InternshipComponent},
      {path:'ppc',component:PpcComponent},
      {path:'logic-building',component:LogicBuildingComponent},
      {path:'rawdata',component:RawdataComponent},
      {path:'new-user',component:NewUserComponent},
      {path:'update-user',component:UpdateUserComponent},
      {path:'userdata',component:UserdataComponent},
      {path:'create-profile',component:CreateProfileComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'',redirectTo:'/admin/dashboard',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
