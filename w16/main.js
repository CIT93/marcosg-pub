import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

const waterInput = FORM.water;
const dishCheckbox = FORM.dishAndWasher;

waterInput.addEventListener("input", () => {
  const waterValue = parseInt(waterInput.value);
  if (isNaN(waterValue) || waterValue === 0) {
    dishCheckbox.checked = false;
    dishCheckbox.disabled = true;
  } else {
    dishCheckbox.disabled = false;
    dishCheckbox.checked = true;
  }
});

const start = (first, last, houseHoldMembers, houseSize) => {
  const houseHoldPts = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPts,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });
};

renderTbl(cfpData);

//function to validate a single field
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

//Attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", e => {
  e.preventDefault();

  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";

    const fbObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foodChoice.value,
      e.target.foodSource.value,
      parseInt(e.target.water.value),
      e.target.dishAndWasher.checked,


    );

    cfpData.push(fbObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();

     // Set checkbox to default checked and enabled state
     dishCheckbox.checked = true;
     dishCheckbox.disabled = false;
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
});

//update