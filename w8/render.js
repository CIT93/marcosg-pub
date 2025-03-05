const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("myForm"); // Replace with actual form ID
const data = []; // Example data array

function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Actions"];
  
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTblBtn(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";

  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener("click", function () {
    data.splice(index, 1);
    renderTbl(data);
  });

  btnEdit.addEventListener("click", function () {
    FORM.elements["name"].value = data[index].name;
    FORM.elements["household"].value = data[index].household;
    FORM.elements["houseSize"].value = data[index].houseSize;
    FORM.elements["footprint"].value = data[index].footprint;
    
    FORM.dataset.editIndex = index; // Save index for updating
  });

  return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");

  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");

    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }

    const td = renderTblBtn(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  return tbody;
}

function renderTbl(data) {
  TBL.innerHTML = ""; // Clear the table before rendering

  if (data.length === 0) {
    TBL.innerHTML = "<p>No data available</p>"; // Optional: show message when no data
    return;
  }

  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}

// Handle form submission for adding or updating entries
FORM.addEventListener("submit", function (event) {
  event.preventDefault();

  const index = FORM.dataset.editIndex;
  const newData = {
    name: FORM.elements["name"].value,
    household: FORM.elements["household"].value,
    houseSize: FORM.elements["houseSize"].value,
    footprint: FORM.elements["footprint"].value,
  };

  if (index !== undefined) {
    data[index] = newData; // Update existing entry
    delete FORM.dataset.editIndex; // Clear edit mode
  } else {
    data.push(newData); // Add new entry
  }

  console.log("Current Data Array: ", data); // Debugging log

  renderTbl(data);
  FORM.reset();
});

// Initial rendering when there’s data
renderTbl(data);

export { renderTbl };
