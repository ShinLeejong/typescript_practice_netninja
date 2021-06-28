var greeting;
greeting = function (a, b) {
    if (a === void 0) { a = "hi"; }
    if (b === void 0) { b = "there"; }
    console.log(a, b);
};
// greeting = (a = 40, b = "there") => { // default value of a "40" is not assignable to string
//     console.log(a, b);
// }
var sum;
sum = function (a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 2; }
    return a + b;
};
// sum = (a: string = '1', b: number = 2) => {     // also error
//     return a + b;
// }
sum = function (a, b) {
    return (+a) + (+b);
};
sum = function (a, b) {
    return a + b;
};
var introduce;
var Lee = {
    name: "Leejong",
    year: "1995"
};
introduce = function (Lee) { return +Lee.year; };
