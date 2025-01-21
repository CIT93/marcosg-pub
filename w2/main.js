// How to Calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

// 1. Count the members of your household
const myHouseMembers = 12;
// 2. Consider the size of your home
const myHomeSize = 7;
// 3. Evaluate your food choices
const myFoodChoice = 10;
// 4. Examine your water consumption
const myWaterConsumption = 3;
// 5. Determine how many household purchases you make each year
const myPurchases = 10;
// 6. Consider how much waste you produce
const myWaste = 30;
// 7. Identify the amount of waste that you recycle
const myRecycle = 24;
// 8. Tally up your annual transportation scores
const myMileage = 10;
// 9. Add up your points
const cfpTotal = myFoodChoice + myHomeSize + myHouseMembers + myMileage + myPurchases + myPurchases + myRecycle + myWaste + myWaterConsumption
// 10. Write JS to update the rendered html (index.html) with total footprint
document.getElementById('cfp-total').textContent = cfpTotal + ' points';

