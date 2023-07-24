// let person ={
//     name:'vishal',
//     age:24,
//     gender:"Male"
// };

// let {name} = person;

// console.log(name);

// complex example

function displayUserDetails({name, age,country}){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`country: ${country}`);
}

let user ={
    name:"Vishal",
    age:24,
    country:"India",
}

displayUserDetails(user);

