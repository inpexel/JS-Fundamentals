function getUserInfo({name, age}){
    console.log(`Name:${name} Age:${age}`)
};

let user = {
    name:"Vishal",
    age:24,
};

getUserInfo(user);

function getFirstAndLastNames([firstName, lastName]){
    console.log(`First Name:${firstName}`)
    console.log(`Last Name:${lastName}`)
}

let names = ["Ankit", "desai"]
getFirstAndLastNames(names)