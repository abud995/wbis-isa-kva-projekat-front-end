import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegisterStudentComponent } from './register/register-student/register-student.component';
import { RegisterTeacherComponent } from './register/register-teacher/register-teacher.component';
import { AccountDataComponent } from './account-data/account-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { AddressComponent } from './address/address.component';
import { TeacherComponent } from './teacher/teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    StudentComponent,
    HomeComponent,
    RegisterComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent,
    AccountDataComponent,
    AddressComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
