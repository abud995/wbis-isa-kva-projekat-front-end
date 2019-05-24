import { University } from '../university/university';
import { Address } from '../address/address';
import { Teacher } from '../teacher/teacher';
import { StudyProgram } from '../study-program/study-program';

export class Faculty {

    id: number;
    name: string;
    university: University;
    address: Address;
    teachers: Teacher[];
    studyPrograms: StudyProgram[];
}