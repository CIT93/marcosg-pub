import { renderTbl } from "./render.js";

const FORM = document.getElementById("form");
const cfpData = [];

function determineHouseSizePts(size) {
  if (size === "large") return 10;
  if (size === "medium") return 7;
  if (size === "small") return 4;
  if (size === "apt") return 2;
  return 0;
}

function determineHouseHoldPts(numberInHousehold) {
  if (numberInHousehold === 1) return 14;
  if (numberInHousehold === 2) return 12;
  if (numberInHousehold === 3) return 10;
  if (numberInHousehold === 4) return 8;
  if (numberInHousehold === 5) return 6;
  if (numberInHousehold === 6) return 4;
  return numberInHousehold > 6 ? 2 : 0;
}

function start(houseHoldMembers, houseSize, firstName, lastName) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;

  cfpData.push({
    firstName,
    lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });

  renderTbl(cfpData); // ✅ Pass data to the table rendering function
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = FORM.firstname.value.trim();
  const lastName = FORM.lastname.value.trim();
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;

  if (!firstName || !lastName || !houseMembers || !houseSize) {
    alert("Please fill out all fields correctly.");
    return;
  }

  start(houseMembers, houseSize, firstName, lastName);
  FORM.reset();
});

;
// it wont work because we are using two different terms for apartment betwene the index and js.
//assume the user are not going to give you good data

//we got the error because we are blockscoped under the forEach
//how many modules can we import/export in one code?