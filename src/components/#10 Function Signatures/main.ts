let greeting: (a: string, b: string) => void;
greeting = (a = "hi", b = "there") => {
    console.log(a, b);
}

// greeting = (a = 40, b = "there") => { // default value of a "40" is not assignable to string
//     console.log(a, b);
// }

let sum: (a: number, b: number) => number;
sum = (a: number = 1, b: number = 2) => {
    return a + b;
}

// sum = (a: string = '1', b: number = 2) => {     // also error
//     return a + b;
// }

sum = (a: (string|number), b: (string|number)) => { // able
    return (+a) + (+b);
}

sum = (a: any, b: any) => { // able
    return a + b;
}

let introduce: (param: {
    name: string,
    year: number
}) => any;

const Lee = {
    name: "Leejong",
    year: "1995"
}

introduce = (Lee): number => +Lee.year;