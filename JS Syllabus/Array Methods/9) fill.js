const numbers = [1,2,3,4,5];

numbers.fill(0, 1)

console.log(numbers)


const length = 5;
const starsArray = Array(length).fill("#")
console.log(starsArray);

for(let i=length; i>0; i--){
    console.log(starsArray.join(' '))
    starsArray.pop();
}