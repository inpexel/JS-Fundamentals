let numbers = [1,2,3,4,5];
let sum = 0;

for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        sum += numbers[i] * 2;
    }else{
        sum += numbers[i]*3
    }
}

console.log(sum);



