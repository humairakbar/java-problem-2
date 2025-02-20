const jim = 34;
const kim = 45;
const tim = 23;

if(jim > kim && jim > tim){
    console.log("Jim is the boss!");
}
else if(kim > jim && kim > tim){
    console.log("Kim is the boss!");
}
else{
    console.log("Tim is the boss!");
}

// using function

function maxOfThree(num1 , num2 , num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const max = maxOfThree(34 , 67 , 23);
console.log("The max is : ", max);

// using Math method

const max2 = Math.max(1,2,3,4,5,6,334,4454,323,567);
console.log("The max using Math method is :",max2);