import { HomeComponent } from './home/home.component';
import { EdituserComponent } from './edituser/edituser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentregiterComponent } from './studentregiter/studentregiter.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:'register' ,component:StudentregiterComponent},
  {path:'dashboard/:id',component:DashboardComponent},
  {path:'details',component:DetailComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'product',component:ProductComponent},

  {path:'admindashboard',component:AdmindashboardComponent,children:[
   
    {path:'user' ,component:StudentlistComponent} ,
    {path:'teacher' ,component:TeacherComponent} ,
    {path:'result' ,component: ResultComponent} ,
    {path:'edit',component:EdituserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
