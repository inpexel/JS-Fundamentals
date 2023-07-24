/*
In JavaScript, values are considered truthy or falsy depending
on whether they're coerced to true or false in a boolean context.
A boolean context is any context where a value is expected to be
evaluated as a boolean, such as in an if statement or a logical
operator.

Here are the values that are considered falsy in JavaScript:

false
null
undefined
0
NaN
An empty string ("")

All other values in JavaScript are considered truthy
*/

let x;

if(x){
    console.log("x is truthy")
}
else{
    console.log("x is falsy")
}