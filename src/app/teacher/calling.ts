import { ScientificField } from './scientific-field';
import { CallingType } from './calling-type';
import { Teacher } from './teacher';

export class Calling {

    id:number;
    dateOfChoice: Date;
    dateOfEnd:Date;
    scientificField: ScientificField;
    callingType: CallingType;
    teacher: Teacher;

}