/*
here's an example that demonstrates the difference between
var and let in terms of block scoping:

*/

function varExample(){
    for(var i=0; i<5; i++){
        console.log(i); // Output: 0 1 2 3 4
    }

    console.log(i) //Output: 5
}

function letExample(){
    for(let i=0; i<5; i++){
        console.log(i); // Output: 0 1 2 3 4
    }

    console.log(i); // Output: Throws an error: Uncaught ReferenceError: i is not defined
}

varExample();
letExample();