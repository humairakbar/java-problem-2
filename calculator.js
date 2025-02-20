function add (num1 , num2){
    return num1 + num2;
}
function sub (num1 , num2){
    return num1 - num2;
}
function mul (num1 , num2){
    return num1 * num2;
}
function divide (num1 , num2){
    return num1 / num2;
}

function calculator(a , b , operation){
    if(operation === 'add'){
        const result = add(a , b);
        return result;
    }
    else if(operation === 'sub'){
        const result = sub(a , b);
        return result;
    }
    else if(operation === 'mul'){
        return mul(a , b);
    }
    else if(operation === 'divide'){
        return divide(a , b);
    }
    else{
        return "please appy only 'add' , 'sub' , 'mul' , 'divide'";
    }
}

const result = calculator(8 , 4, 'divide');
console.log("The result is : ", result);