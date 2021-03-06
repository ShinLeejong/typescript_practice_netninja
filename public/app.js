import Invoice from "./classes/Invoice";
import Payment from "./classes/Payment";
import { ListTemplate } from './classes/ListTemplate';
const me = {
    name: "Leejong",
    age: 27,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount - 100;
    },
};
const greetPerson = (person) => console.log('hello', person.name);
greetPerson(me);
let docOne;
docOne = new Invoice('Lee', "Having a party", 200);
const docTwo = new Payment('Guri', "Take a napping", 150);
let docs = [];
docs.push(docOne, docTwo);
console.log(docs);
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
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber // A nice way to convert String value into number type
    );
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
