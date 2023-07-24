const products = [
    { name: 'T-shirt', price: 20, category: 'Clothing' },
    { name: 'Jeans', price: 50, category: 'Clothing' },
    { name: 'Shoes', price: 80, category: 'Footwear' },
    { name: 'Watch', price: 100, category: 'Accessories' },
  ];

  const affordableProducts = products.filter((product)=>{
    return product.price <= 50;
  })

  console.log(affordableProducts)