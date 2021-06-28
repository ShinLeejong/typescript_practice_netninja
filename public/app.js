"use strict";
// Class - Blueprint of code
class Invoice {
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
/* <!-- How to use Class really nice */
const invOne = new Invoice('Lee', 'learning TypeScript', 250);
const invTwo = new Invoice('Guri', 'Grrr', 50);
let invoices = [];
invoices.push(invOne, invTwo);
invOne.client = 'Leejong'; // able to change its property
// invTwo.amount = 100; // not able to modify it as it is decleared as private
invTwo.setAmount(100); // OK. Setter
// invTwo.amount = '100'; // not able to change its type
// invOne.details = 'nicely' // not able to modify it as it is decleared as readonly
console.log(invOne, invTwo);
/* --> */
let form;
form = document.querySelector("form"); // by using !(exclamation mark), you mean that this is EXISTS.
const selectFormWithAs = document.querySelector('.item-form'); // good way alternative : Type Casting
// Type Casting Practice
const type = document.querySelector('#type');
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber // A nice way to convert String value into number type
    );
});
