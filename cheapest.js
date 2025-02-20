const mobiles = [
    { name : 'Smasung' , price : 50000 , camera : '24mp' , color : 'black'},
    { name : 'Xiomi' , price : 30000 , camera : '24mp' , color : 'black'},
    { name : 'Iphone' , price : 150000 , camera : '24mp' , color : 'black'},
    { name : 'Oppo' , price : 20000 , camera : '24mp' , color : 'black'}
]

function cheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheapest = cheapestPhone(mobiles);
console.log("The cheapest phone is : ", cheapest);