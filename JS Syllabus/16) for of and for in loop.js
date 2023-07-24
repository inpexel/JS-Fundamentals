const person = {
    name:"vishal",
    age:30,
    gender:"male",
};

for(let property in person){
    console.log([property], person[property]);
}

const numbers = [1,2,3,4,5];

for(let number of numbers){
    console.log(number)
}