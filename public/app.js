"use strict";
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
