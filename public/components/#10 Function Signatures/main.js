"use strict";
let greeting;
greeting = (a = "hi", b = "there") => {
    console.log(a, b);
};
// greeting = (a = 40, b = "there") => { // default value of a "40" is not assignable to string
//     console.log(a, b);
// }
let sum;
sum = (a = 1, b = 2) => {
    return a + b;
};
// sum = (a: string = '1', b: number = 2) => {     // also error
//     return a + b;
// }
sum = (a, b) => {
    return (+a) + (+b);
};
sum = (a, b) => {
    return a + b;
};
let introduce;
const Lee = {
    name: "Leejong",
    year: "1995"
};
introduce = (Lee) => +Lee.year;
