const user = {
    id: 1,
    name: 'John',
    age: 30,
    email: 'john@example.com',
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA'
    }
  };

let{name, address:{city, country}, email} = user;

console.log(name)
console.log(city)
console.log(country)


const user2 = {
    name2:"vishal",
    age:24,
}

let {name2, address:{ city2='palwal', country2='India'}} = user2;


console.log(city2);
console.log(country2);