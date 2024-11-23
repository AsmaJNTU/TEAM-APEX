"use strict";
let fruits = ["Apple", "Banana", "Orange"];
let nums = [1, 2, 3];
nums.push(4);
;
let mySize = 3;
function calculateTax(income, taxYear = 2024) {
    if (taxYear < 2025)
        return income * 1.2;
    return income * 1.3;
}
let employee = {
    id: 1,
    name: 'asma',
    retire: (date) => {
        console.log(date);
    }
};
let employee1 = {
    id: 1,
    name: 'asma',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(undefined);
//# sourceMappingURL=index.js.map