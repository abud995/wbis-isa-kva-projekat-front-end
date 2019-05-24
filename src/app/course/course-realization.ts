import {Course} from './course'
import {CourseAttending} from './course-attending'
import {CourseTeaching} from './course-teaching'

export class CourseRealization {

    id: number;
    courseTeachings: CourseTeaching[];
    courseAttendings: CourseAttending[];
    course: Course[];
}