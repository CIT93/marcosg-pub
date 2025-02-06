const cfpData = [];

function determineHouseSizePts(size) {
    let HouseSizePoints = 0;
    if(size === "large"){
        HouseSizePoints = 10;
    } else if(size === "medium") {
        HouseSizePoints = 7;
    } else if(size === "small") {
        HouseSizePoints = 4;
    } else if(size === "apt") {
        HouseSizePoints = 2;  
    }
    return HouseSizePoints;
}

function determineHouseSizePts(numberInHousehold) {
    let HouseHoldPts = 0;
    if (numberInHousehold === 1) {
        HouseHoldPts = 14;
    } else if(numberInHousehold === 2) {
        HouseHoldPts = 12;
    } else if(numberInHousehold === 3) {
        HouseHoldPts = 10;
    } else if(numberInHousehold === 4) {
        HouseHoldPts = 8;
    } else if(numberInHousehold === 5) {
        HouseHoldPts = 6;
    } else if(numberInHousehold === 6) {
        HouseHoldPts = 4;
    } else if(numberInHousehold > 6) {
        HouseHoldPts = 2;
    } 
    return HouseHoldPoints;
}

function start(houseHoldMembers, houseSize) {
  const HouseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const HouseSizePTS = determineHouseSizePts(houseSize);
  const total = HouseHoldPTS + HouseSizePTS;
  cfpData.push([houseHoldMembers, houseSize, HouseHoldPTS, HouseSizePTS, total]);
}

function displayOutput(){
    
}
start(5, "apt");
start(4, "large");
start(3, "Medium");
start(2, "Small")

displayOutput()






















//Yes








// const myName = "Marcos Gutierrez";
// const myAge = 21;

// const jsIsWeird = myName + myAge;

// console.log(jsIsWeird);
// console.log(typeof jsIsWeird);
// console.log(typeof myAge);

// what is order of precedence
// Order of Precedence is pretty much just the order of operations but for math in code which is slightly differently worded.
// write an example

// const num1 = 5;
// const num2 = 10;
// const num3 = 2;

// const result = num1 + num2 * num3 - 4 / 2;
// console.log(result);

// const amIhungry = true;
// console.log(typeof amIhungry);

// let myVar;
// console.log(typeof myVar);

// const myHeading = document.querySelector("h1");
// console.log(typeof myHeading);

// const myPet = "cat";
// const myPetName = "Monkey";
// const myPetAge = 2;

// console.log("I have a " + myPet + " her name is " + myPetName + " and she is " + myPetAge + " years old. ");
// const outputString = `I have a ${myPet} her name is ${myPetName} and she is ${myPetAge} years old.`;
// myHeading.textContent = outputString;

// The error is forgetting to add defer before src in the html

// If you live alone, then add 14 points to your carbon footprint.
// If you share a house or apartment with 1 other person, then add 12 points.
// If you share a house or apartment with 2 other people, then add 10 points.
// If you share a house or apartment with 3 other people, then add 8 points.
// If you share a house or apartment with 4 other people, then add 6 points.
// If you share a house or apartment with 5 other people, then add 4 points.
// If you share a house or apartment with more than 5 other people, then add 2 points.


// if (numberInHousehold === 1) {

// }
//     carbonFootprintPoints = carbonFootprintPoints + 14;
// This Code Block did not run because it was False.

// now pause video and attempt to write code for the remainning conditions
// Code seemed to work properly
//Commit Message - Code Challenge


// two options
// 1. write this logic using switch statement
// 2. come up with a decision you make and write logic (conditional statement for that)
// commit message - "second coding challenge"

// let carbonFootprintPoints = 0;
// const numberInHousehold = 3;

// switch (numberInHousehold) {
//     case 1:
//         carbonFootprintPoints += 14;
//         break;
//     case 2:
//         carbonFootprintPoints += 12;
//         break;
//     case 3:
//         carbonFootprintPoints += 10;
//         break;
//     case 4:
//         carbonFootprintPoints += 8;
//         break;
//     case 5:
//         carbonFootprintPoints += 6;
//         break;
//     case 6:
//         carbonFootprintPoints += 4;
//         break;
//     default:
//         if (numberInHousehold > 6) {
//             carbonFootprintPoints += 2;
//         }
// }

// console.log(`The Carbon Foot Print for a Household of ${numberInHousehold} is ${carbonFootprintPoints}.`);

