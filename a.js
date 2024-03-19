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
