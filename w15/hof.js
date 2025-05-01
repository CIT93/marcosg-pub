import { cfpData } from "./storage.js";

// Calculate the total points for each points based on its properties
const calculateTotalPoints = (points) => {
  // Calculate the total points from relevant properties
  return points.houseHoldPoints + points.houseSizePoints + points.foodChoicePoints;
};

// Calculate the average based on total points
const calculateAverage = () => {
  
  // Calculate the total points for each points
  const totalArray = cfpData.map(points => calculateTotalPoints(points));

  // Sum all the total points
  const total = totalArray.reduce((sum, val) => sum + val, 0);

  // Return the average
  return total / cfpData.length;
};

const addRow = (avg) => {
  const table = document.getElementById("tab-data");
  if (!table) return;

  // Insert a new row at the bottom of the table
  let newRow = table.insertRow(-1);

  // Get the number of cells in the first row (header)
  const cellCount = table.rows[0]?.cells.length || 6;

  // Insert cells for the new row
  for (let i = 0; i < cellCount; i++) {
    newRow.insertCell(i);
  }

  // Add background color and insert values into the new row
  newRow.style.backgroundColor = "rgba(0, 229, 255, 0.44)";
  newRow.cells[cellCount - 2].innerText = "Average CFP"; // Column for label
  newRow.cells[cellCount - 1].innerText = avg.toFixed(2); // Column for average value
};

export { calculateAverage, addRow };