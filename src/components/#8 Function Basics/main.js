var add;
add = function (a, b, c, d, e) {
    return d ? a + b + c + e : a + b + c;
};
var add1 = add(1, '2', 3);
var add2 = add(1, 2, 3); // Don't use like this with no error
var add3 = add(true, false, null, undefined); // Don't use like this with no error
var doNothing = function () {
    console.log("nothing");
};
var returnSomething = doNothing(); // Don't use like this with no error
