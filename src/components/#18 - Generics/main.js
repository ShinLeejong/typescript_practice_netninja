"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* 1 */
// const addUID = (obj: object) => {
//     const randomed = Math.floor(Math.random() * 100);
//     return {
//         ...obj,
//         randomed
//     };
// }
// const docOne = addUID({name: "Leejong", age: 40});
// console.log(docOne.name); // 'randomed 속성에 name 속성이 없음';
/* 2 */
// const addUID = <T>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let docOne = addUID({name: "Leejong", age: 40});
// console.log(docOne.name); // OK
// let docTwo = addUID('hello'); // 이것도 돼버림. 문제가 생김
/* 3 */
// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let docOne = addUID({name: "Leejong", age: 40});
// console.log(docOne.name); // OK
// // let docTwo = addUID('hello'); // 이제 이건 안됨. T가 object임을 선언했기 때문
/* 4 */
// 더 좋은 사용 방법
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: "Leejong", age: 40 });
console.log(docOne.name); // OK
var docTwo = {
    uid: 1,
    resourceName: "Guri",
    data: {
        body: "Hi!"
    }
};
var docThree = {
    uid: 1,
    resourceName: "Guri",
    data: "Hi!"
    // data: {          // You can't
    //     body: "Hi!"  // use 
    // }                // like this
};
