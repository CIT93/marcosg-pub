function DHHP(numberInHousehold) {
    let carbonFootprintPoints = 0;  // Resetting the points inside the function
    console.log("Inside the DHHP function");
    if (numberInHousehold === 1) {
      carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
      carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
      carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
      carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
      carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
      carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold > 6) {
      carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`The Carbon Footprint for a Household of ${numberInHousehold} is ${carbonFootprintPoints}.`);
  }
  
  // Example usage
  DHHP(3); // Adds points for a household of 3 people
  DHHP(4); // Adds points for a household of 4 people
  
  function addHouseSizePoints(houseSize) {
    let carbonFootprintPoints = 0;  // Resetting the points inside the function
    console.log("Inside the addHouseSizePoints function");
    if (houseSize.toLowerCase() === "large") {
      carbonFootprintPoints += 10;
    } else if (houseSize.toLowerCase() === "medium") {
      carbonFootprintPoints += 7;
    } else if (houseSize.toLowerCase() === "small") {
      carbonFootprintPoints += 4;
    } else if (houseSize.toLowerCase() === "apartment") {
      carbonFootprintPoints += 2;
    } else {
      console.log("Unknown house size, no points added.");
    }
    console.log(`The Carbon Footprint Points after house size adjustment for ${houseSize} is ${carbonFootprintPoints}.`);
  }
  
  // Example usage
  addHouseSizePoints("Large");      // Adds 10 points for a large house
  addHouseSizePoints("Small");      // Adds 4 points for a small house
  addHouseSizePoints("Apartment"); // Adds 2 points for an apartment
  addHouseSizePoints("Unknown");   // Handles invalid input gracefully
  