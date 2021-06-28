// Class - Blueprint of code
export default class Payment {
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    } // this is very good way to use class without initializing properties
    format() {
        return `${this.recipient} is owed ${this.amount}$ for ${this.details}`;
    }
}
