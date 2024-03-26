"use strict";
let x = 1;
//problem 1 give types to arguments
const greet = (firstName) => {
    console.log("Hello " + firstName);
};
console.log(greet("Sarthak"));
//problem 2 give type to the returned value
const sum = (a, b) => {
    return a + b;
};
const value = sum(1, 2);
console.log(value);
//problem 3 return true or false if 18+
const isLegal = (age) => {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
};
isLegal(24);
//problem 4 a function that takes another fn as an input
const taker = (fn) => {
    setTimeout(() => {
        fn();
    }, 1000);
};
taker(() => {
    console.log("hello");
});