export const renderTable = (users, table, tableBody, form, outputDiv, setEditingId, saveToStorage) => {
  tableBody.innerHTML = "";
  if (users.length === 0) {
    table.style.display = "none";
    return;
  }

  table.style.display = "table";

  users.forEach(user => {
    const discount = user.age >= 60 
      ? user.originalPrice * 0.15 
      : user.isMember 
        ? user.originalPrice * 0.10 
        : 0;

    const stateTax = getStateTax(user.state);
    const totalWithTax = user.originalPrice + (user.originalPrice * stateTax);

    const finalPrice = user.originalPrice - discount + totalWithTax;

    const row = document.createElement("tr");
    row.setAttribute("data-id", user.id);

    const ageCell = document.createElement("td");
    ageCell.textContent = user.age;
    row.appendChild(ageCell);

    const memberCell = document.createElement("td");
    memberCell.textContent = user.isMember ? "Yes" : "No";
    row.appendChild(memberCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = user.originalPrice.toFixed(2);
    row.appendChild(priceCell);

    const discountCell = document.createElement("td");
    discountCell.textContent = discount.toFixed(2);
    row.appendChild(discountCell);

    const taxCell = document.createElement("td");
    taxCell.textContent = (user.originalPrice * stateTax).toFixed(2);
    row.appendChild(taxCell);

    const finalPriceCell = document.createElement("td");
    finalPriceCell.textContent = finalPrice.toFixed(2);
    row.appendChild(finalPriceCell);

    const actionsCell = document.createElement("td");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => {
      setEditingId(user.id);
      form.age.value = user.age;
      form.price.value = user.originalPrice;
      form.member.checked = user.isMember;
      outputDiv.innerHTML = "<p>Editing entry... make changes and click Submit.</p>";
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
      const index = users.findIndex(u => u.id === user.id);
      if (index !== -1) {
        users.splice(index, 1);
        saveToStorage(users);
        row.remove();
        if (users.length === 0) {
          table.style.display = "none";
        }
        outputDiv.innerHTML = "";
      }
    };

    actionsCell.appendChild(editBtn);
    actionsCell.appendChild(deleteBtn);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
};

// Tax rate function based on state
function getStateTax(state) {
  const taxRates = {
    "CA": 0.075, // California
    "TX": 0.0625, // Texas
    "NY": 0.04,   // New York
    "FL": 0.06,   // Florida
    "NJ": 0.066,  // New Jersey
    // Add more states and their tax rates as needed
  };

  return taxRates[state] || 0; // Default to 0 if state is not found
}
