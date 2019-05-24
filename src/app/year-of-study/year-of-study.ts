import { Course } from '../course/course';
import { StudentYear } from '../student/student-year';
import { StudyProgram } from '../study-program/study-program';

export class YearOfStudy {

    id: number;
    year: Date;
    courses: Course[];
    studentsYear: StudentYear[];
    studyPrograms: StudyProgram[];

}