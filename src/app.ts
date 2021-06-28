// Class - Blueprint of code
class Invoice { // Initialize is needed for each property
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }   // this is very good way to use class without initializing properties

    format() {
        return `${this.client} owes ${this.amount}$ for ${this.details}`
    }
}

/* <!-- How to use Class really nice */
const invOne: Invoice = new Invoice('Lee', 'learning TypeScript', 250);
const invTwo: Invoice = new Invoice('Guri', 'Grrr', 50);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo); 

invOne.client = 'Leejong';  // able to change its property
invTwo.amount = 100;
// invTwo.amount = '100'; // not able to change its type

console.log(invOne, invTwo);
/* --> */

let form: HTMLFormElement;
form = document.querySelector("form")!;   // by using !(exclamation mark), you mean that this is EXISTS.

const selectFormWithAs = document.querySelector('.item-form') as HTMLFontElement; // good way alternative : Type Casting

// Type Casting Practice
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber // A nice way to convert String value into number type
    );
})