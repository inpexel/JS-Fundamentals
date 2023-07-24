/*
The && and || operators are logical operators in JavaScript
that are used to combine and evaluate conditions.

The && operator returns true if both operands are true, and false otherwise.
*/

let x =  5;
let y = 10;

if(x > 0 && y > 0){
    console.log("both x and y are positive");
}

/*
    The || operator returns true if at least one operand is true, and false otherwise.
*/

let a = 5;
let b = 10;

if (a > 0 || b < 0) {
  console.log("Either a is positive or b is negative.");
}


/*
The && and || operators can also be used in conjunction with other expressions to form more complex conditions.
*/

let A = 5;
let B = 10;
let C = 15;

if ((A > 0 && B > 0) || C > 0) {
  console.log("At least one of A and B is positive, or C is positive.");
}
