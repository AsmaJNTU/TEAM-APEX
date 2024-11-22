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
console.log(calculateTax(10000));
//# sourceMappingURL=index.js.map