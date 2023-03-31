import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboradComponent } from './pages/dashborad/dashborad.component';
import { NavComponent } from './body/nav/nav.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboradComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AdminModule { }