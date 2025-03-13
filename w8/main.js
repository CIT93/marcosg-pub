import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { renderTBL } from "./render.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push ({
    firstname: first,
    lastname: last,
    houseHm: houseHoldMembers,
    houseS: houseSize,
    houseHpts: houseHoldPTS,
    houseSpts: houseSizePts,
    tot: total,
  });
}   


FORM.addEventListener('submit', function(e){
  e.preventDefault();
  /* console.log("I am inside the callback function");
  console.log(e); */
  const firstname = FORM.FirstName.value;
  const lastname = FORM.LastName.value;
  const houseHoldMembers = parseInt(FORM.hhmembers.value);
  const houseSize = FORM.houses.value;
  
  start(firstname, lastname, houseHoldMembers, houseSize)
  renderTBL(cfpData)
  OUTPUT.innerHTML = "";
  FORM.reset();
})
