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
      const finalPrice = user.originalPrice - discount;
  
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
  