// Get the Local Storage data (returns an empty array if no data exists)
const getLS = () => {
  const retrieveArr = localStorage.getItem("cfp");
  if (retrieveArr !== null) {
      console.log("Data retrieved from LocalStorage:", retrieveArr); // Debugging log
      return JSON.parse(retrieveArr);
  } else {
      console.log("No data found in LocalStorage. Returning empty array.");
      return [];
  }
}

// Initialize cfpData from Local Storage
let cfpData = getLS();
console.log("cfpData initialized as:", cfpData); // Debugging log

// Save data to Local Storage
const saveLS = (data) => {
  const serializedArr = JSON.stringify(data); // Serialize the passed-in data
  localStorage.setItem("cfp", serializedArr); // Store it in localStorage
  console.log("Data saved to LocalStorage:", serializedArr); // Debugging log
}

// Export cfpData, saveLS, and getLS
export { cfpData, saveLS, getLS };
