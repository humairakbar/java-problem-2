let salman = 45;
let disha = 50;

if(disha > salman){
    console.log("Disha will get the cake!");
}
else{
    console.log("Salman will get the cake!");
}

// using function

function getMax(num1 , num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(45 , 67);
const max2 = getMax(87 , 98);
const ultimateMax = getMax(max1 , max2);

console.log("The ultimate max number is : ", ultimateMax);