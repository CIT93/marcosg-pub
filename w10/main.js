import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import { saveLS, cfpData } from "./storage.js";

const start = function(houseHoldMembers, houseSize, firstName, lastName) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;

  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });
}
renderTbl(cfpData); 

// function to validate a single field
const validateField = function(event) {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);
    if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
    } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
    }
  }
  // attach blur event listeners
  FNAME.addEventListener("blur", validateField);
  LNAME.addEventListener("blur", validateField);
  
 
FORM.addEventListener("submit", function (e) {
  e.preventDefault();
if (FNAME.value !== '' && LNAME.value !==''){
    SUBMIT.textContent = '';
  start(FORM.housem.value, FORM.houses.value, parseInt(FNAME.value), LNAME.value);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
}else {
   
  SUBMIT.textContent = "Form requires first name and last name ";
    
}
});

const add2 = function(...a) {
  return 2 + a[3];
}

const result = add2(1, 2, 3, 4);

// spread argument

//IIFE

// const a = 3;

(function(a){
  console.log("inside IIFE");
  console.log (a);
})(a);