/*
In JavaScript, the break and continue keywords are used to
modify the behavior of loops.
*/

for(let i=1; i<10; i++){
    console.log(i)
    if(i===5){
        break
    }
};



/*
the continue keyword can be used to skip over certain
iterations of a loop:
*/

for(let i=1; i<10; i++){
    if(i % 2 === 0){
        continue
    }
    console.log(i)
};
