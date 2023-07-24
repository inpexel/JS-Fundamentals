// function calculateTotal(){
//     const totalPrice = this.prices.reduce((acc, price) => acc + price, 0);
//     console.log(`Total Cost: $${totalPrice}`);
// }

// const shoppingCart = {
//     prices: [10, 20, 30, 40]
//   };

// calculateTotal.call(shoppingCart);

const person1 = {
    name:"vishal",
    age:23,
    greet(){console.log(`hello ${this.name}`)}
}

const person2 = {
    name:"vikas",
    age:23,
}



// person1.greet.call(person2);
// person1.greet.apply(person2);

const person2Function = person1.greet.bind(person2);

person2Function();