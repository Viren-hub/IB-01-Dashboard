import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PpcComponent } from './components/ppc/ppc.component';
import { InternshipComponent } from './components/internship/internship.component';
import { LogicBuildingComponent } from './components/logic-building/logic-building.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { RawdataComponent } from './components/rawdata/rawdata.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    PpcComponent,
    InternshipComponent,
    LogicBuildingComponent,
    CreateProfileComponent,
    NavbarComponent,
    NewUserComponent,
    RawdataComponent,
    SidebarComponent,
    UpdateUserComponent,
    UserdataComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
