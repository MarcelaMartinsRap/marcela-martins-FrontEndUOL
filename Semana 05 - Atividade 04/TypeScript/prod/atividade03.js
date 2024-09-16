"use strict";
function reverseArray(array) {
    return [...array].reverse();
}
const num = [10, 23, 13];
const text = ['apple', 'avocado', 'banana'];
const reversedNumbers = reverseArray(num);
const reversedStrings = reverseArray(text);
console.log(reversedNumbers);
console.log(reversedStrings);
