"use strict";
const user = {
    firstName: "Sarthak",
    lastName: "Bhatt",
    email: "Sarthak@email.com",
    age: 26,
};
const isLegalCheck = (obj) => {
    if (obj.age > 18) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isLegalCheck(user));
