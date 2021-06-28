import Invoice from "./classes/Invoice";
import Payment from "./classes/Payment";
import { HasFormatter } from './interfaces/HasFormatter';
import { IsPerson } from './interfaces/IsPerson';
import { ListTemplate } from './classes/ListTemplate';

const me: IsPerson = {
    name: "Leejong",
    age: 27,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        return amount - 100;
    },
    // skills: ['mining', 'foraging'] // not able because the property "skills" is not in interface isPerson 
}

const greetPerson = (person: IsPerson) => console.log('hello', person.name);
greetPerson(me);

let docOne: HasFormatter;
docOne = new Invoice('Lee', "Having a party", 200);
const docTwo = new Payment('Guri', "Take a napping", 150);

let docs: HasFormatter[] = [];
docs.push(docOne, docTwo);
console.log(docs);

/* <!-- How to use Class really nice */
const invOne: Invoice = new Invoice('Lee', 'learning TypeScript', 250);
const invTwo: Invoice = new Invoice('Guri', 'Grrr', 50);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo); 

invOne.client = 'Leejong';  // able to change its property
// invTwo.amount = 100; // not able to modify it as it is decleared as private
invTwo.setAmount(100); // OK. Setter
// invTwo.amount = '100'; // not able to change its type
// invOne.details = 'nicely' // not able to modify it as it is decleared as readonly


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
const ul = document.querySelector("ul") as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber // A nice way to convert String value into number type
    );

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
})