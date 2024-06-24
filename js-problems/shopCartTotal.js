// The Shopping Cart Totalizer:
// You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

const calculateTotal =(products)=>{
    let total = 0;

    for(let i=0;i<products.length;i++){
        const {price,quantity} = products[i] // Extract price and quantity from the current product
        const toalProduct = price*quantity;
        total += toalProduct;
    }
    return total;
}

let products =[
    {price:10 , quantity:3 },
    {price:5 , quantity:2 },
    {price:15 , quantity:4 }
]

let result = calculateTotal(products);

console.log(`Total cost: ${result}`);