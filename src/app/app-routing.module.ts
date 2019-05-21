import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {StudentComponent} from './student/student.component'
import {RegisterComponent} from './register/register.component'
import {RegisterStudentComponent} from './register/register-student/register-student.component'
import {RegisterTeacherComponent} from './register/register-teacher/register-teacher.component'
import {AccountDataComponent} from './account-data/account-data.component'
import {AddressComponent} from './address/address.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-student', component: RegisterStudentComponent },
  { path: 'register-teacher', component: RegisterTeacherComponent },
  { path: 'account-data',component: AccountDataComponent},
  { path: 'address',component: AddressComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
