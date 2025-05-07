import { FORM, TBL } from "./global.js"
import { saveLS } from "./storage.js";

const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "House Hold", "House Size", "Food Choice", "Footprint", "Actions"];
  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data)
  renderTbl(data);
}

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener(`click`, e => {
    onUpdate(index, data);
  });

  btnEdit.addEventListener(`click`, e => {
    FORM[1].value = obj.firstName;
    FORM[2].value = obj.lastName;
    FORM[3].value = obj.houseHoldMembers;
    FORM[4].value = obj.houseSize;
    FORM[5].value = obj.foodChoice;
    onUpdate(index, data);
  })

  return td;
}

const renderBody = data => {
  const tbody = document.createElement("tbody")

  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["firstName", "houseHoldMembers", "houseSize", "foodChoice", "total"]
    keys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    })
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  return tbody;
}
 
const getAvgScore = (data) => {
  if (data.length === 0) return 0;
  const total = data
    .map(entry => entry.total)
    .reduce((sum, score) => sum + score, 0);
  return (total / data.length).toFixed(2);
};

const renderTbl = data => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderBody(data);
    table.appendChild(tbody);

    // Add avg row
    const avgScore = getAvgScore(data);
    const avgRow = table.insertRow(-1);

    
    for (let i = 0; i < 4; i++) {
      avgRow.insertCell(i).textContent = "";
    }

    
    const avgLabelCell = avgRow.insertCell(4);
    avgLabelCell.textContent = "Average Footprint";

    
    const avgValueCell = avgRow.insertCell(5);
    avgValueCell.textContent = avgScore;

    TBL.appendChild(table);
  }
}

export { renderTbl };