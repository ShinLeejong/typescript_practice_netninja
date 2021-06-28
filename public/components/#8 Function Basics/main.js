"use strict";
let add;
add = (a, b, c, d, e) => {
    return d ? a + b + c + e : a + b + c;
};
const add1 = add(1, '2', 3);
const add2 = add(1, 2, 3); // Don't use like this with no error
const add3 = add(true, false, null, undefined); // Don't use like this with no error
const doNothing = () => {
    console.log("nothing");
};
const returnSomething = doNothing(); // Don't use like this with no error
