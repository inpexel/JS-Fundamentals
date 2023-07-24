
// in Simple functins

// function createMultiplier(multiplier){
//     return function (number){
//         return multiplier * number
//     }
// }

// write with arrow function

const createMultiplier = multiplier => number => multiplier * number; 

let double = createMultiplier(2);

console.log(double(6));