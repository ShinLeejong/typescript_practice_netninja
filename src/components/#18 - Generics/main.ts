import Payment from '../../classes/Payment';
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
const addUID = <T extends {name: string /*, age: number 해도 되고 안해도 됨 */}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: "Leejong", age: 40});
console.log(docOne.name); // OK
// docOne = addUID({name: 40, age: "Leejong"}) // 타입 매칭 안됨. 사용 불가

/* ENUMS */
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// Each one of these keywords represents its existance by its own index

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docTwo: Resource<Object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {
        body: "Hi!"
    }
}

const docThree: Resource<String> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: "Hi!"
    // data: {          // You can't
    //     body: "Hi!"  // use 
    // }                // like this
}