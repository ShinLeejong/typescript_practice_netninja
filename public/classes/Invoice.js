// Class - Blueprint of code
export default class Invoice {
    constructor(c, d, a) {
        this.setAmount = (num) => this.amount = num; // Setter
        this.getAmount = () => this.amount; // Getter
        this.client = c;
        this.details = d;
        this.amount = a;
    } // this is very good way to use class without initializing properties
    format() {
        return `${this.client} owes ${this.amount}$ for ${this.details}`;
    }
}
