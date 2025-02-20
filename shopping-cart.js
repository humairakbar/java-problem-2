const products = [
    { name : 'Shampoo' , price : 1300 , quantity : 3 },
    { name : 'Bag' , price : 3000 , quantity : 5 },
    { name : 'Shoes' , price : 1000 , quantity : 4 },
    { name : 'Shirt' , price : 500 , quantity : 2 }
]

function totalShoppingCost(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const cost = totalShoppingCost(products);
console.log("Total cost is : ", cost);