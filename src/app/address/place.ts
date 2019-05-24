import { Country } from './country';
import {Address} from './address'

export class Place {
	id:string;
	name:string;
	country:Country;
	addresses: Address[];
}