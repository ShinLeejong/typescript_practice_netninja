let add: Function;

add = (a: number, b: string, c: (number|string), d?: boolean, e?: any) => {
    return d ? a + b + c + e : a + b + c;
}

const add1: number = add(1, '2', 3);
const add2: number = add(1, 2, 3);      // Don't use like this with no error
const add3: number = add(true, false, null, undefined); // Don't use like this with no error

const doNothing = (): void => {
    console.log("nothing");
}

const returnSomething = doNothing(); // Don't use like this with no error