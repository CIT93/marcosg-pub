const TBL = document.getElementById("tab-data")

function renderTBLButtons(index, data){
  const td = document.createElement("td")
  const btnEdit = document.createElement("Button")
  const btnDel = document.createElement("Button") 
  btnEdit.textContent = "Edit"
  btnDel.textContent = "Del"
  td.appendChild(btnEdit)
  
  td.appendChild(btnDel) 
    btnDel.addEventListener('click', function(e) {
    console.log("hello from inside the delete button")
    console.log(e)
    data.splice(index, 1)
    renderTBL(data)
}) 

btnEdit.addEventListener('click', function(e){

  })
  return td;
}


function renderRow(data) {
  const tbody = document.createElement("tbody")
  data.forEach(function(obj, index) {
    console.log(index)
    const tr = document.createElement("tr")
    for(const [key, value] of Object.entries(obj)) {
      if (key !== "lastname" && key !== "houseHpts" && key !== "houseSpts" ) {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);   
        
      }
    }
    const td = renderTBLButtons(index, data);
    tr.append(td)
    tbody.appendChild(tr);  
    });
return tbody;
}

function renderTBL(data) {
  TBL.innerHTML = "";
  if (data.length === 0) {
  return; 
}
  const table = renderTBlHeading()
  const tbody = renderRow(data)
  table.appendChild(tbody);
  TBL.appendChild(table);
} 
  
  function renderTBlHeading() {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingText = ["Name", "household", "housesize", "total", "actions"]
    headingText.forEach(function(text,) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
      console.log(th);
  } )
  thead.appendChild(tr);
  table.appendChild(thead);
  console.log(table);
  TBL.appendChild(table);
  return table} 

  export {renderTBL, renderTBlHeading}