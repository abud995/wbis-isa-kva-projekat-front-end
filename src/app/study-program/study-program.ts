import { YearOfStudy } from '../year-of-study/year-of-study';
import { Faculty } from '../faculty/faculty';
import { Teacher } from '../teacher/teacher';

export class StudyProgram {

    id: number;
    name: string;
    yearsOfStudy: YearOfStudy[];
    faculty: Faculty;
    teachers: Teacher[];

}