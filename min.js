const prices = [20000 , 40000 , 50000 , 30000 , 15000];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log("The cheapest phone's price is : ", cheap);