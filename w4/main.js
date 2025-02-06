const cfpData = [];

function determineHouseSizePts(size) {
  let HouseSizePoints = 0;
  if (size === "large") {
    HouseSizePoints = 10;
  } else if (size === "medium") {
    HouseSizePoints = 7;
  } else if (size === "small") {
    HouseSizePoints = 4;
  } else if (size === "apt") {
    HouseSizePoints = 2;
  }
 
  return HouseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold >= 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}



function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);

}

function displayOutput() {
   for (arr of cfpData){
    console.log(arr)
    const out = document.getElementById("output");
    const newP = document.createElement("p")
    newP.textContent = `House members ${arr[0]}, score for house members is ${arr[2]}, Size of house = ${arr[1]}, Score for size of house is ${arr[3]}. The Carbon Footprint total is ${arr[4]}`;
    output.appendChild(newP)
   } 
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");
start(2, "medium");
start(4, "apt");
start(5, "large");

displayOutput();