import {Calling} from './calling'
import {Address} from '../address/address'
import {AccountData} from '../account-data/account-data'
import {Faculty} from '../faculty/faculty'
import {University} from '../university/university'
import {StudyProgram} from '../study-program/study-program'
import {CourseTeaching} from '../course/course-teaching'

export class Teacher {

    id: number;
    biography: string;
    accountData: AccountData;
    address: Address;
    callings: Calling[];
    faculties: Faculty[];
    universities: University[];
    studyPrograms: StudyProgram[];
    courseTeachings: CourseTeaching[];

}