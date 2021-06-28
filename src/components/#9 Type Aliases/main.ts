const loggingUid = (id: (string | number), clientName: string): void => {
    console.log(`clientName ${clientName}'s id is ${id}`);
}

type typeAlias1 = string | number; // This won't be compiled. look at main.js

const anotherWay = (id: typeAlias1, clientName: string): void => {
    console.log(`clientName ${clientName}'s id is ${id}`);
}

const sayHello = (user: {name: string}): void => {
    console.log(`Hi, ${user.name}!`);
}

type typeAlias2 = { // This won't be compiled. look at main.js
    name: string
}

const anotherWay2 = (user: typeAlias2): void => {
    console.log(`Hi, ${user.name}!`);
}