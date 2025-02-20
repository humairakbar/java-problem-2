const heights = [65 , 54 , 78 , 56 , 87];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log("The tallest one is : ", max);