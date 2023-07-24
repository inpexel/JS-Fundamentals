// Array of user objects
const users = [
    {
      id: 1,
      name: 'John',
      age: 30,
      email: 'john@example.com',
      address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
      },
      hobbies: ['reading', 'coding', 'traveling']
    },
    {
      id: 2,
      name: 'Alice',
      age: 25,
      email: 'alice@example.com',
      address: {
        street: '456 Elm St',
        city: 'London',
        country: 'UK'
      },
      hobbies: ['painting', 'cooking', 'hiking']
    },
    {
      id: 3,
      name: 'Bob',
      age: 35,
      email: 'bob@example.com',
      address: {
        street: '789 Oak St',
        city: 'Sydney',
        country: 'Australia'
      },
      hobbies: ['gardening', 'photography', 'running']
    }
  ];

  for(let i=0; i<users.length; i++){
        let user = users[i]
        console.log(`user name = ${user.name}`)
        console.log(`user age = ${user.age}`)
        console.log(`user email = ${user.email}`)
        console.log(`user street = ${user.address.street}`)
        console.log(`user city = ${user.address.city}`)
        console.log(`user country = ${user.address.country}`)
  }