const TBL = document.getElementById("tab-data");

function renderTbl(data) {
    const tbody = TBL.querySelector("tbody");
    tbody.innerHTML = ""; // ✅ Clear previous entries

    data.forEach(obj => {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = obj.firstName;
        tr.appendChild(tdName);

        const tdTotal = document.createElement("td");
        tdTotal.textContent = obj.cfpTotal;
        tr.appendChild(tdTotal);

        tbody.appendChild(tr); // ✅ Append new row to table
    });
}

export { renderTbl };
