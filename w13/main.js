const FORM = document.getElementById("form");
const output = document.getElementById("output");

function getFitExercise() {
    // Create initial heading
    const heading = document.createElement("p");
    heading.textContent = "Submit to start!";
    output.appendChild(heading);

    FORM.addEventListener("submit", function (event) {
        event.preventDefault();

        const exercise = FORM.elements["exercise"].value;
        const reps = FORM.elements["reps"].value;
        const time = FORM.elements["time"].value;

        // Clear previous messages
        output.innerHTML = "";
        output.appendChild(heading);

        // Create and append start message
        const startMessage = document.createElement("p");
        startMessage.textContent = `Start ${exercise} < > Goal reps is ${reps}`;
        output.appendChild(startMessage);

        // Wrap setTimeout in a Promise
        const exercisePromise = new Promise((resolve, reject) => {
            if (!exercise || !reps || !time || isNaN(time)) {
                reject("Invalid input. Please fill all fields correctly.");
            } else {
                setTimeout(() => {
                    resolve(`Stop ${exercise}`);
                }, parseInt(time) * 1000);
            }
        });

        // Handle the Promise result
        exercisePromise
            .then((message) => {
                const stopMessage = document.createElement("p");
                stopMessage.textContent = message;
                output.appendChild(stopMessage);
            })
            .catch((error) => {
                const errorMessage = document.createElement("p");
                errorMessage.textContent = `Error: ${error}`;
                errorMessage.style.color = "red";
                output.appendChild(errorMessage);
            });
    });
}

getFitExercise();
