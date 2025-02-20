/**
 * Ticket price 
 * -------------
 * 1/ Buy up to 100 -- Price each - 100 tk
 * 2/ Buy between 101 to 200 -- Price each - 90 tk
 * 3/ Buy more than 200 -- Price each - 70 tk
 */

function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}

const totalPrice = discountedPrice(101);
console.log("Total price of the tickets is : ", totalPrice);