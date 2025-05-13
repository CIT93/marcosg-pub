import { renderTable } from './render.js';
import { getUsers, saveUsers } from './storage.js';
import Decision from './decision.js';

let users = getUsers();
let editingId = null;

const form = document.getElementById("userForm");
const errorDiv = document.getElementById("error");
const outputDiv = document.getElementById("output");
const tableBody = document.querySelector("#userTable tbody");
const table = document.getElementById("userTable");

const setEditingId = (id) => {
  editingId = id;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorDiv.textContent = "";
  outputDiv.innerHTML = "Processing...";

  const age = parseInt(form.age.value);
  const isMember = form.member.checked;
  const originalPrice = parseFloat(form.price.value);

  if (isNaN(age) || isNaN(originalPrice)) {
    errorDiv.textContent = "Please enter valid numbers for age and price.";
    outputDiv.innerHTML = "";
    return;
  }

  if (age <= 0 || age > 120) {
    errorDiv.textContent = "Please enter a realistic age (1–120).";
    outputDiv.innerHTML = "";
    return;
  }

  const userData = {
    id: editingId || Date.now(),
    age,
    isMember,
    originalPrice
  };

  if (editingId) {
    users = users.map(u => (u.id === editingId ? userData : u));
    editingId = null;
  } else {
    users.push(userData);
  }

  saveUsers(users);

  setTimeout(() => {
    const discount = Decision.calculateDiscount(userData);
    const message = Decision.generateMessage(userData, discount);
    outputDiv.innerHTML = `<p>${message}</p>`;
    form.reset();
    renderTable(users, table, tableBody, form, outputDiv, setEditingId, saveUsers);
  }, 1000);
});

renderTable(users, table, tableBody, form, outputDiv, setEditingId, saveUsers);
