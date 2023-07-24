/*
In JavaScript, a function expression is another way to define a
function. Unlike function declarations, function expressions do not
have a function name that is hoisted, and they can be assigned to
variables or used as anonymous functions.
*/


const sayHello = function(){
    console.log("hello");
}

sayHello();

function executeFunction(func){
    func()
}

executeFunction(sayHello);