"use strict";
function calcularQunatia(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
const result = calcularQunatia(1, 2, 3, 4, 5);
console.log(result);
