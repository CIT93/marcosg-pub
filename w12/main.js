const FORM = document.getElementById("form");
const output = document.getElementById("output");

function getFitExercise(){
    // Create initial heading
const heading = document.createElement("p");
heading.textContent = "Submit to start!";
output.appendChild(heading);

FORM.addEventListener("submit", function (event) {
    event.preventDefault(); 
   
    const exercise = FORM.elements["exercise"].value;
    const reps = FORM.elements["reps"].value;
    const time = FORM.elements["time"].value;
    
    // Create and append start message
    const startMessage = document.createElement("p");
    startMessage.textContent = `Start ${exercise} < > Goal reps is ${reps}`;
    output.appendChild(startMessage);
    
    setTimeout(() => {
        // Create and append stop message
        const stopMessage = document.createElement("p");
        stopMessage.textContent = `Stop ${exercise}`;
        output.appendChild(stopMessage);
    },parseInt(time)*1000); 
});
}
getFitExercise();