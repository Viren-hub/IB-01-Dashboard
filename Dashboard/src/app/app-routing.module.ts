import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from './components/log-in/log-in.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import{UserDataComponent} from './components/user-data/user-data.component';
import {NewUserComponent} from './components/new-user/new-user.component'
const routes: Routes = [{
  path:'login', component:LogInComponent
},
{
  path:'dashboard', component:DashboardComponent
},
{
  path:'user', component:UserDataComponent
},
{
  path:'createUser',component:NewUserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
