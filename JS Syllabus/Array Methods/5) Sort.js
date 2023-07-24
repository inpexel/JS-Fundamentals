const products = [
    { name: 'Shirt', price: 20 },
    { name: 'Jeans', price: 50 },
    { name: 'Shoes', price: 30 },
    { name: 'Hat', price: 15 },
  ];

  products.sort((a,b)=> a.price - b.price)

  console.log(products);