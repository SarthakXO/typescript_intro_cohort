"use strict";
var x = 1;
//problem 1 give types to arguments
var greet = function (firstName) {
    console.log("Hello " + firstName);
};
console.log(greet("Sarthak"));
//problem 2 give type to the returned value
var sum = function (a, b) {
    return a + b;
};
var value = sum(1, 2);
console.log(value);
//problem 3 return true or false if 18+
var isLegal = function (age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
};
isLegal(24);
//problem 4 a function that takes another fn as an input
var taker = function (fn) {
    setTimeout(function () {
        fn();
    }, 1000);
};
taker(function () {
    console.log("hello");
});
