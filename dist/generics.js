"use strict";
function identity(arg) {
    return arg;
}
let ouput1 = identity("MyString");
let ouput2 = identity(1234);
const firstEl = (arr) => {
    return arr[0];
};
console.log(firstEl(["sarthak", "bhatt"]).toUpperCase());
