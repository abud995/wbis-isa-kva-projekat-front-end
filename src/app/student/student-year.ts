import { YearOfStudy } from '../year-of-study/year-of-study';
import { Student } from './student';

export class StudentYear {

    id: number;
    registrationDate: Date;
    numIndex: number;
    yearOfStudy: YearOfStudy;
    student: Student;

}