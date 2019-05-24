import { YearOfStudy } from '../year-of-study/year-of-study';
import { Result } from '../result/result';
import {Faculty} from '../faculty/faculty'
import { CourseRealization } from './course-realization';

export class Course {
	id:number;
	name:string;
	ects:number;
	obligatory:boolean;
	numberOfLectures:number;
    numberOfExcercises:number;
	otherFormsOfActivities:number;
	researchPaper:number;
	otherClasses:number;
	sylabus:Result[];
    yearOfStudy:YearOfStudy;
    faculty:Faculty;
    courseRealizations:CourseRealization[];
}