console.log("Hello, Stephen"); // This is a simple JavaScript file for testing purposes
alert("This is a test alert!");

const button = document.getElementById("changeColorButton");
const div = document.getElementById("theDiv");

// Array of colors to cycle through
const colors = ["lightblue", "lightgreen", "lightcoral", "lightyellow", "lightpink", "lightgray", "lightcyan"];
const buttonColors = ["lightblue", "lightgreen", "lightcoral", "lightyellow", "lightpink", "lightgray", "lightcyan"];
let currentColorIndex = 0;

button.addEventListener("click", () => {
    div.style.backgroundColor = colors[currentColorIndex];
    button.style.backgroundColor = buttonColors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle back to start when reaching end
});

