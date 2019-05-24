import { Teacher } from '../teacher/teacher';
import { Address } from '../address/address';
import { Faculty } from '../faculty/faculty';

export class University {

    id: number;
    name: string;
    dateOfEstablishment: Date;
    faculties: Faculty[];
    address: Address;
    teachers: Teacher[];

}