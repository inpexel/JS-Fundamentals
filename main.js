// set only stores the unique values
const numbers = [1,2,3,3,4,5,5,1];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);


//filter unique fruits and also check something is present oor not using "has" keyword
const fruits = ["apple", "banana", "orange", "apple", "Apple"];
const uniqueFruits = new Set(fruits);

console.log(uniqueFruits);
console.log(uniqueFruits.has("banana"));


// lets filter the unique name from an array of objects
const users = [
    { id: 1, username: 'john' },
    { id: 2, username: 'jane' },
    { id: 3, username: 'john' },
    { id: 4, username: 'adam' },
    { id: 4, username: 'adam' }
  ];

  const uniqueUserName = [...new Set(users.map(user => user.username))];

  console.log(uniqueUserName);