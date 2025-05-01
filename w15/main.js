import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";
import { calculateAverage, addRow } from "./hof.js";

const start = (first, last, houseHoldMembers, houseSize) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;

  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });
};

// Validate form fields
const validateField = (event) => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

// attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    //start( FNAME.value, LNAME.value, parseInt(FORM.housem.value),  FORM.houses.value);
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(FORM.housem.value),
      FORM.houses.value,
      FORM.food.value
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    const avg = calculateAverage();
    addRow(avg);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name ";
  }
});