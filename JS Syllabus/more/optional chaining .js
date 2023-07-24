const user = {
    id: 1,
    name: 'John Doe',
    address: {
      city: 'New York',
      street: '123 Main St'
    }
  };


  // Accessing properties without optional chaininng

const city1 = user && user.address && user.address.city;
console.log(city1);