import { Component, OnInit } from '@angular/core';
import {Student} from '../../student/student'
import {StudentServiceService} from '../../student/student-service.service'
import {FormGroup, AbstractControl, FormBuilder, Validators,FormControl } from '@angular/forms'

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  public student: Student = new Student();
  public form : FormGroup;

  constructor(private studentService : StudentServiceService, private fb:FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({});

  }


  addStudent(){
    this.student = this.form.value;
    this.studentService.add(this.student).subscribe();
    
  }


}
