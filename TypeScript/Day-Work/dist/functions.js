"use strict";
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
let myValue = addTwo(5);
getUpper("hitesh");
const uses = signUpUser("hitesh", "hitesh@lco.dev", false);
console.log(uses);
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
//# sourceMappingURL=functions.js.map