import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Teacher} from './teacher'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  private teacherUrl = "http://localhost:8080/teacher";


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Teacher[]>(this.teacherUrl);
  }

  getOne(id: String) {
    return this.http.get<Teacher>(this.teacherUrl+`/${id}`);
  }

  delete(id: String) {
    return this.http.delete(this.teacherUrl+`/${id}`);
  }

  add(student: Teacher) {
    return this.http.post(this.teacherUrl, student);
  }

  update(id: string, teacher: Teacher) {
    return this.http.put(this.teacherUrl+`/${id}`, teacher)
  }


}
