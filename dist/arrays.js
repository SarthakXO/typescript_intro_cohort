"use strict";
const maxValue = (arr) => {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > x) {
            x = arr[i];
        }
    }
    return x;
};
const arr = [1, 2, 23, 4, 5, 6, 7];
console.log(maxValue(arr));
