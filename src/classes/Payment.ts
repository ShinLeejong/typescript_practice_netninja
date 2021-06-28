import { HasFormatter } from '../interfaces/HasFormatter';

// Class - Blueprint of code
export default class Payment implements HasFormatter { // Initialize is needed for each property
    public recipient: string; // public is default
    readonly details: string;
    private amount: number;

    constructor(c: string, d: string, a: number){
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }   // this is very good way to use class without initializing properties

    format() {
        return `${this.recipient} is owed ${this.amount}$ for ${this.details}`
    }
}