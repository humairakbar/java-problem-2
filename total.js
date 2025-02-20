const products = [
    { name : 'Shampoo' , price : 1300 },
    { name : 'Bag' , price : 3000 },
    { name : 'Shoes' , price : 1000 },
    { name : 'Shirt' , price : 500 }
]

function totalCost(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }
    return sum;
}
const cost = totalCost(products);
console.log("Total cost of the products is : ", cost);