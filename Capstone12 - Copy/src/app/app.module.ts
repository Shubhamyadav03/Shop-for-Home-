import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { StudentregiterComponent } from './studentregiter/studentregiter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { EdituserComponent } from './edituser/edituser.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentregiterComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdmindashboardComponent,
    AdminhomeComponent,
    AdminheaderComponent,
    StudentlistComponent,
    TeacherComponent,
    ResultComponent,
    EdituserComponent,
    ProductComponent,
    DetailComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
