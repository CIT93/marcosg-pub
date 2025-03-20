import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

const start = (...i) => {
  const houseHoldPTS = determineHouseHoldPts(i[0]);
  const houseSizePts = determineHouseSizePts(i[1]);
  const total = houseHoldPTS + houseSizePts;

  cfpData.push({
    firstName: i[2],
    lastName: i[3],
    houseM: i[0],
    houseS: i[1],
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });
}
renderTbl(cfpData); 

// function to validate a single field
const validateField = event => {
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
  
 
FORM.addEventListener("submit", e => {
  e.preventDefault();
 
if ( FNAME.value !== '' && LNAME.value !=='' ){
    SUBMIT.textContent = '';
  start( parseInt(FORM.housem.value),  FORM.houses.value, FNAME.value, LNAME.value);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
}else {
   
  SUBMIT.textContent = "Form requires first name and last name ";
    
}
});
// rest operator
//const add2 = function(...a){
//  return 2+a[3];
//}

//const results = add2(1, 2, 3,4);

// arrow function

const add2 = a =>  2+a;



const results = add2(100);

//IIFE
const a = 3; 

(function(a){
console.log("inside IIFE")
console.log(a)
})(a);
