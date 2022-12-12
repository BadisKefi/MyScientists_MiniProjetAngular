import { Field } from "./field.model";
export class Scientist {
    id? : number;
    name? : string;
    birthDate? : Date;
    deathDate? : Date;
    field! : Field;
}