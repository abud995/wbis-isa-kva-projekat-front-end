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
import { YearOfStudyComponent } from './year-of-study/year-of-study.component';
import { CourseComponent } from './course/course.component';
import { ResultComponent } from './result/result.component';
import { FacultyComponent } from './faculty/faculty.component';
import { UniversityComponent } from './university/university.component';
import { StudyProgramComponent } from './study-program/study-program.component';
import { LoginComponent } from './login/login.component';


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
    TeacherComponent,
    YearOfStudyComponent,
    CourseComponent,
    ResultComponent,
    FacultyComponent,
    UniversityComponent,
    StudyProgramComponent,
    LoginComponent
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
