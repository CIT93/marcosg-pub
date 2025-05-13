import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const calculateAvg = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0);
  const tableRef = document.getElementById("table-id");
  let newTR = tableRef.insertRow(-1);
  let newTD = newTR.insertCell(0);
  let newTD_1 = newTR.insertCell(0);
  let newLabl = document.createTextNode(`Average Footprint`);
  let newText = document.createTextNode(`${Math.floor(reduceTotal / data.length)}`);
  newTD_1.appendChild(newLabl);
  newTD.appendChild(newText);
};

const renderTblHeading = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "table-id");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const headingTextArr = [
    "First",
    "Last",
    "Footprint Totals",
    "Actions",
  ];
  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
};

const onUpdate = (index, data) => {
  let updatedData = [...data]; // Make a shallow copy of data array
  updatedData.splice(index, 1); // Remove the entry from the array
  saveLS(updatedData); // Save the updated data to local storage
  renderTbl(updatedData); // Re-render the table with updated data
};

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener("click", () => {
    onUpdate(index, data);
  });

  btnEdit.addEventListener("click", () => {
    // Populate other form fields
    if (FORM.firstName) FORM.firstName.value = obj.first;
    if (FORM.lastName) FORM.lastName.value = obj.last;
    if (FORM.housem) FORM.housem.value = obj.houseMembers;
    if (FORM.houses) FORM.houses.value = obj.houseSize;
    if (FORM.food) FORM.food.value = obj.foodChoice;
    if (FORM.foodSource) FORM.foodSource.value = obj.foodSource;
    if (FORM.water) FORM.water.value = obj.waterConsum.toString();
    if (FORM.dishAndWasher) FORM.dishAndWasher.checked = obj.waterConsumPoints !== 0 && obj.waterConsumPoints % 2 === 0;
    if (FORM.purchase) FORM.purchase.value = obj.itemPurchasePoints.toString();
    if (FORM.garbage) FORM.garbage.value = obj.waste.toString();
    if (FORM.recycleGlass) FORM.recycleGlass.checked = obj.recycling.glass;
    if (FORM.recyclePlastic) FORM.recyclePlastic.checked = obj.recycling.plastic;
    if (FORM.recyclePaper) FORM.recyclePaper.checked = obj.recycling.paper;
    if (FORM.recycleAluminum) FORM.recycleAluminum.checked = obj.recycling.aluminum;
    if (FORM.recycleSteel) FORM.recycleSteel.checked = obj.recycling.steel;
    if (FORM.recycleFoodWaste) FORM.recycleFoodWaste.checked = obj.recycling.foodWaste;

    // Check if transportation fields exist before assigning values
    if (FORM.personalVehicle) FORM.personalVehicle.value = obj.transportation.personalVehicle || "";
    if (FORM.publicTransportation) FORM.publicTransportation.value = obj.transportation.publicTransportation || "";
    if (FORM.flights) FORM.flights.value = obj.transportation.flights || "";
  });

  return td;
};

const renderTblBody = (data) => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["first", "last", "total"];
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    });

    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
};

const renderTbl = (data) => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    calculateAvg(data);
  }
};

export { renderTbl };
