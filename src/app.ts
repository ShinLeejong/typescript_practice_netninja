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
    )
})