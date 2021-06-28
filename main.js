// Arrays
var names = ['Lee', "Shin", "Kim", "Park", "Ryu"];
var favorites = [2.4, 6, 8.1, 10.4, 9.0];
var chaoticSomething = ['9', 6.1, '9.6', 7, 239847]; // union type
chaoticSomething[0] = 7; // 이제 가능
chaoticSomething[1] = '6.4'; // 이제 가능
var someArr = [];
someArr.push("Hey"); // OK
// someArr.push(4);     // Error
var someArr2 = [];
someArr2.push("Hey"); // OK
someArr2.push(true); // OK
var someArr3 = []; // can union as much as I want
// Objects
var myInfo = {
    name: "Leejong",
    age: 27,
    sex: "Male",
    isBlack: false
};
myInfo.name = "Shin Leejong";
// myInfo.age = "28";  // 할당 불가
var Infos;
Infos = {
    name: "Leejong",
    age: 27,
    sex: "Male",
    isBlack: false
};
