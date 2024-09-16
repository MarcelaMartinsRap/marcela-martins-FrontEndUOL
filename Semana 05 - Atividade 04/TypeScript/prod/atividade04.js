"use strict";
function manipulateNumber(i) {
    if (typeof i === 'number') {
        return i * i;
    }
    else {
        return i.map(num => num * num);
    }
}
console.log(manipulateNumber(8));
console.log(manipulateNumber([10, 33, 44]));
