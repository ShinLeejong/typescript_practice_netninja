"use strict";
let age = 27;
age = true; // 전혀 문제가 되지 않는다
age = 'hello'; // 이 또한 가능하다
age = { name: "Leejong", age: 27 }; // 이것도 가능해진다
age = { name: 26, age: "Leejong" }; // 이렇게 재선언해도 된다
// 부득이하게 사용할 수 있고 매끄럽지 못한 작동이나 에러를 방지하는 데 쓸 수 있지만
// 사용이 권장되지 않고, 개인적으로도 좋아하지 않는다
