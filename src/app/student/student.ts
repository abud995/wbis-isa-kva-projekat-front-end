import { AccountData } from '../account-data/account-data';
import { Address } from '../address/address';
import {StudentYear} from './student-year'
import {CourseAttending} from '../course/course-attending'

export class Student {

    id: number;
    accountData : AccountData;
    address: Address;
    studentYears: StudentYear[]; 
    courseAttendings: CourseAttending [];

}