import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './pages/dashborad/dashborad.component';
import { NavComponent } from './body/nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DashboradComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule

  ]
})
export class AdminModule { }
