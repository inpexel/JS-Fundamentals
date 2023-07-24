// Original Object
const user = {
    id:1,
    name:"Jogn Doe",
    age:30
};

//Creating a Shallow copy of the object
const userCopy = Object.assign({}, user);

console.log(user)
console.log(userCopy)