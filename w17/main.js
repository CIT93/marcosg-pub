import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";


// Waste points
const calculateWastePoints = (waste) => {
  switch (waste) {
    case "50": return 50;
    case "40": return 40;
    case "30": return 30;
    case "20": return 20;
    case "5": return 5;
    default: return 0;
  }
};

// Recycling points
const calculateRecyclingPoints = (recycles) => {
  const recyclingCategories = ["glass", "plastic", "paper", "aluminum", "steel", "foodWaste"];
  let points = 24;
  recyclingCategories.forEach((category) => {
    if (recycles[category]) {
      points -= 4;
    }
  });
  return points;
};

// Water input logic
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

FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";

    const waste = e.target.garbage.value;

    const recycling = {
      glass: e.target.recycleGlass.checked,
      plastic: e.target.recyclePlastic.checked,
      paper: e.target.recyclePaper.checked,
      aluminum: e.target.recycleAluminum.checked,
      steel: e.target.recycleSteel.checked,
      foodWaste: e.target.recycleFoodWaste.checked,
    };

    // Get transportation values
    const vehicleMiles = e.target.vehicleMiles.value;
    const publicMiles = e.target.publicMiles.value;
    const flightMiles = e.target.flightMiles.value;

    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.food.value,
      e.target.foodSource.value,
      parseInt(e.target.water.value),
      e.target.dishAndWasher.checked,
      parseInt(e.target.purchase.value),
      waste,
      recycling,
      vehicleMiles,
      publicMiles,
      flightMiles
    );

    const wastePoints = calculateWastePoints(waste);
    const recyclingPoints = calculateRecyclingPoints(recycling);
    fpObj.total += wastePoints + recyclingPoints;

    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);

    FORM.reset();
    dishCheckbox.checked = true;
    dishCheckbox.disabled = false;

  } else {
    SUBMIT.textContent = "Form requires first name and last name ";
  }
});



renderTbl(cfpData);
