const moviesArr = [
  { title: "The Fast and the Furious", year: 2001, rating: 6.8, watched: 5 },
  { title: "2 Fast 2 Furious", year: 2003, rating: 5.9, watched: 3 },
  { title: "Fast & Furious", year: 2009, rating: 6.6, watched: 4 },
  { title: "Fast Five", year: 2011, rating: 7.3, watched: 6 },
  { title: "Furious 7", year: 2015, rating: 7.1, watched: 7 },
  { title: "The Fate of the Furious", year: 2017, rating: 6.6, watched: 2 },
  { title: "F9: The Fast Saga", year: 2021, rating: 5.2, watched: 1 },
];

function displayOutMovies() {
  const output = document.getElementById("output");

  moviesArr.forEach((Obj) => {
    console.log(Obj);

    if (Obj.rating > 6 && Obj.watched < 5 || Obj.rating < 7) {
      const newH1 = document.createElement("h1");
      newH1.textContent = `${Obj.title} (released in ${Obj.year}) has a rating of ${Obj.rating}/10 and has been watched ${Obj.watched} times.`;
      output.appendChild(newH1);
    }
  });
}

displayOutMovies();










// const cfpData = [];

// function determineHouseSizePts(size) {
//     let houseSizePoints = 0;
//     if(size === "large") {
//       houseSizePoints = 10;
//     } else if(size === "medium") {
//       houseSizePoints = 7;
//     } else if (size === "small") {
//       houseSizePoints = 4;
//     } else if (size === "apt") {
//       houseSizePoints = 2;
//     }
//       return houseSizePoints;
//   }
  
//   function determineHouseHoldPts(numberInHousehold) {
//     let houseHoldPoints = 0;
//     if (numberInHousehold === 1) {
//       houseHoldPoints = 14;
//     } else if (numberInHousehold === 2) {
//       houseHoldPoints = 12;
//     } else if (numberInHousehold === 3) {
//       houseHoldPoints = 10;
//     } else if (numberInHousehold === 4) {
//       houseHoldPoints = 8;
//     } else if (numberInHousehold === 5) {
//       houseHoldPoints = 6;
//     } else if (numberInHousehold === 6) {
//       houseHoldPoints = 4;
//     } else if (numberInHousehold > 6) {
//       houseHoldPoints = 2;
//     }
//      return houseHoldPoints;
//   }
  
  
//   function start(houseHoldMembers, houseSize) {
//     const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//     const houseSizePts = determineHouseSizePts(houseSize);
//     const total = houseHoldPTS + houseSizePts;
//     cfpData.push({
//       houseM: houseHoldMembers,
//       houseS: houseSize,
//       houseMPTS: houseHoldPTS,
//       houseSPTS: houseSizePts,
//       cfpTotal: total,
//     });
  
//   }

  
//   function displayOutput() {
//     if (cfpData.length === 0) {
//       console.log();
//       return;
//     }
  
//     for (obj of cfpData) {
//       console.log(obj)
//       const output = document.getElementById("output");
//       const newH2 = document.createElement("h2");
//       newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
//       const newH3 = document.createElement("h3");
//       newH3.textContent = "Based on  Number in Size of Home";
//       const newP = document.createElement("p");
//       newP.textContent = `This number is based on the number of members of the household of ${obj.houseM} (score: ${obj.houseMPTS}) `;
//       newP.textContent += `and a ${obj.houseS} size of home (score ${obj.houseSPTS})`;
  
//       output.appendChild(newH2);
//       output.appendChild(newH3);
//       output.appendChild(newP);
//     }
//   }
  
  
//   start(1, "apt");
//   start(2, "apt");
//   start(3, "apt");
//   start(4, "apt");
//   start(5, "apt");
//   start(6, "apt");
//   start(7, "apt");
//   start(1, "small");
//   start(2, "small");
//   start(3, "small");
//   start(4, "small");
//   start(5, "small");
//   start(6, "small");
//   start(7, "small");
//   start(1, "medium");
//   start(2, "medium");
//   start(3, "medium");
//   start(4, "medium");
//   start(5, "medium");
//   start(6, "medium");
//   start(7, "medium");
//   start(1, "large");
//   start(2, "large");
//   start(3, "large");
//   start(4, "large");
//   start(5, "large");
//   start(6, "large");
//   start(7, "large");
  
// displayOutput()