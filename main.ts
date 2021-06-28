// Arrays
let names: string[] = ['Lee', "Shin", "Kim", "Park", "Ryu"];
let favorites: number[] = [2.4, 6, 8.1, 10.4, 9.0];
let chaoticSomething: (string|number)[] = ['9', 6.1, '9.6', 7, 239847]; // union type

chaoticSomething[0] = 7;     // 이제 가능
chaoticSomething[1] = '6.4'; // 이제 가능

let someArr: string[] = [];

someArr.push("Hey");    // OK
// someArr.push(4);     // Error

let someArr2: (string|boolean)[] = [];

someArr2.push("Hey");   // OK
someArr2.push(true);    // OK

let someArr3: (number|string|boolean|Array<string>)[] = []; // can union as much as I want

// Objects
let myInfo = {
    name: "Leejong",
    age: 27,
    sex: "Male",
    isBlack: false
}

myInfo.name = "Shin Leejong";
// myInfo.age = "28";  // 할당 불가

let Infos: {            // Object Type Declearation
    name: string,
    age: number,
    sex: string,
    isBlack: boolean
}

Infos = {               // Object Type Initialization
    name: "Leejong",
    age: 27,
    sex: "Male",
    isBlack: false
}