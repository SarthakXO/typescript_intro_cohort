"use strict";
let x = 1;
const greet = (firstName) => {
    console.log("Hello " + firstName);
};
console.log(greet("Sarthak"));
const sum = (a, b) => {
    return a + b;
};
const value = sum(1, 2);
console.log(value);
const isLegal = (age) => {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
};
isLegal(24);
const taker = (fn) => {
    setTimeout(() => {
        fn();
    }, 1000);
};
taker(() => {
    console.log("hello");
});
