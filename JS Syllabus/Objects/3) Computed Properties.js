/*
Computed properties, also known as computed property names or
dynamic property names, allow you to use an expression as the
property name in an object literal. This feature was introduced
in ECMAScript 2015 (ES6) and provides a concise way to define object properties dynamically.
*/


let computedAge = "age";

let animal = {
    type:"tiger",
    locatoin:"bengal, India",
    [computedAge]:22,
}

console.log(animal.age);