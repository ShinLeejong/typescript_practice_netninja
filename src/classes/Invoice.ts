import { HasFormatter } from '../interfaces/HasFormatter';

// Class - Blueprint of code
export default class Invoice implements HasFormatter { // Initialize is needed for each property
    public client: string; // public is default
    readonly details: string;
    private amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }   // this is very good way to use class without initializing properties

    format() {
        return `${this.client} owes ${this.amount}$ for ${this.details}`
    }

    setAmount = (num: number): number => this.amount = num; // Setter
    getAmount = () => this.amount;  // Getter
}