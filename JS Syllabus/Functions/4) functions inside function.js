// function outer(x){
//     return function inner(y){
//         return x + y
//     }
// }

const outer = x => y => x+y;

let add5 = outer(5);
console.log(add5(10))
