/**
 * 1/ Chair - 3 cft
 * 2/ Table - 10 cft
 * 3/ Bed - 50 cft
 */

function woodQuantity(chairQuantity , tableQuantity , bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chaiTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chaiTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;

}

const wood = woodQuantity( 6 , 1 , 1);
console.log("Total wood need for furniture : ", wood);