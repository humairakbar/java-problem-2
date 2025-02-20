function multiply(num1 , num2){
    if(num1 !== 'number' || num2 !== 'number'){
        return "Please enter number!";
    }
    const result = num1 + num3;
    return result;
}

const result = multiply(2, 'dh');
console.log(result);

function getPrice(product){
    if(typeof product !== 'object'){
        return "Enter an object";
    }
    const price = product.price;
    return price;
}
const price = getPrice({name : 'Shampoo' , price : 300});
console.log(price);

function array(numbers){
    if(Array.isArray(numbers) === false){
        return "Please enter and array";
    }
    const result = numbers[1];
    return result;
}
const result1 = array(3);
console.log(result1);