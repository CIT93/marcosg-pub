const TBL = document.getElementById("tab-data");

// Function to create table heading (only runs once)
function renderTblHeading() {
  let existingThead = TBL.querySelector("thead");
  if (!existingThead) { // Prevent duplicate headings
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    // Only include "Name" and "Total" in heading
    const headingTextArr = ["Name", "Total"];
    headingTextArr.forEach(function (text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    TBL.appendChild(thead);
  }
}

// Function to render table rows dynamically from data
function renderTbl(data) {
  renderTblHeading(); // Ensure table heading exists

  const tbody = TBL.querySelector("tbody") || document.createElement("tbody");
  tbody.innerHTML = ""; // Clear table before rendering new data

  data.forEach(obj => {
    const tr = document.createElement("tr"); // Create a new row for each entry

    // Create table cells for name and total
    const tdName = document.createElement("td");
    tdName.textContent = obj.firstName;  
    tr.appendChild(tdName);

    const tdTotal = document.createElement("td");
    tdTotal.textContent = obj.cfpTotal;  
    tr.appendChild(tdTotal);

    tbody.appendChild(tr); // Add row to table body
  });

  TBL.appendChild(tbody); // Ensure tbody is added to the table
}

export { renderTbl, renderTblHeading };
