import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../teacher/teacher'
import {TeacherService} from '../../teacher/teacher.service'
import {FormGroup, AbstractControl, FormBuilder, Validators,FormControl } from '@angular/forms'


@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {

  public teacher: Teacher = new Teacher();
  public form : FormGroup;

  constructor(private teacherService : TeacherService, private fb:FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({});

  }


  addTeacher(){
    this.teacher = this.form.value;
    this.teacherService.add(this.teacher).subscribe();
    
  }
}
