import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { renderTBL } from "./render.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push ({
    firstname: first,
    lastname: last,
    houseHm: houseHoldMembers,
    houseS: houseSize,
    houseHpts: houseHoldPTS,
    houseSpts: houseSizePts,
    tot: total,
  });
}   


FORM.addEventListener('submit', function(e){
  e.preventDefault();
  /* console.log("I am inside the callback function");
  console.log(e); */
  const firstname = FORM.FirstName.value;
  const lastname = FORM.LastName.value;
  const houseHoldMembers = parseInt(FORM.hhmembers.value);
  const houseSize = FORM.houses.value;
  
  start(firstname, lastname, houseHoldMembers, houseSize)
  renderTBL(cfpData)
  OUTPUT.innerHTML = "";
  FORM.reset();
})



/////////

// With the coding challenge, I was a bit confused. I rewatched the previous video and read the instructions for week 7
// coding challenge, maybe it's just me but were we actually supposed to write code? or create new "tbody" in the html?
// cause when I read the instrutions it told us to have code? I am a bit lost currently so I didn't really offer much in code besides
// a few createElement() since i know that we're going to utilize these elements since they are apart of the table. I knew they wouldn't do anything,
// but I realized it would be better to have at least something then nothing.

// Update: after rewatching the video, I kind of understand what you may be asking for, what helped even more is that i rewatched the other previous videos as well
// and the code before hand printed out a table, So I'm going to use that as reference. Now after coding for a while, I came up with this but stopped going any farther
// I remember you saying to hard code the values in the video so I basically took the array that we used previously and replaced the values with the ones located in the td,
// next I tookt the function and of course made a few changes there. I used the foreach method so it could create a new td element for every single item within the array. Now lastly,
// I appenedchild(td) but it didn't work? I thought it would since it had all the values held within it but I ended up getting back a blank square.


// I can't think as to why you caught the error, as I'm analyzing 
// both of our code and when executing it, I didn't catch any errors.
// update: It was because it was inside the local scope already.

/* function renderTBL(data) {
  const table = renderTBlHeading()
  const tbody = document.createElement("tbody")
  const tr = document.createElement("tr")
  const td = document.createElement("td")
  const arr = ["John", "1", "apt", "24",]
  arr.forEach(function(Newtext) {
    const td = document.createElement("td");
    td.textContent = Newtext;
    tr.appendChild(td);
    
    console.log(td);
  })
const btnEdit = document.createElement("Button")
const btnDel = document.createElement("Button")

btnEdit.textContent = "Edit"
btnDel.textContent = "Del"

td.appendChild(btnEdit)
td.appendChild(btnDel)

tr.appendChild(td)
tbody.appendChild(tr)
table.appendChild(tbody)
console.log(table)
}  */

// I thought of creating another function and storing all the within
// the new function, but after that I was a bit lost on how to proceed.
// I kept the orginal code withing the renderTBl function, as I really
// as I worried something may break.
/* function renderTBlHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingText = ["Name", "HouseHold", "HouseSize", "Footprint", "Total" ]
  headingText.forEach(function(text) {
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
 */