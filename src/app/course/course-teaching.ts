import { CourseRealization } from './course-realization';
import { ClassType } from './class-type';
import {Teacher} from '../teacher/teacher'

export class CourseTeaching {

    id:number;
    numberOfClasses:number;
    teacher:Teacher;
    courseRealization:CourseRealization;
    classType:ClassType;
}