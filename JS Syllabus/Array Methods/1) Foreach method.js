let shoppingCart = [
    {name:"T-shirt", price:20},
    {name:"T-shirt", price:80},
    {name:"T-shirt", price:60},
]

let  totalPrice = 0;
shoppingCart.forEach((item)=>{
    totalPrice += item.price;
})