/*----RANDOM CODES----*/

// Group all variables in one area
var getCode = ''; // to store entered code
var btnvalue = true; // for button boolean value
var code = ''; // to store generated code
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

// Function to generate combination of characters
function generateCode() {
    code = ''; // initialize to empty value

    // Generate character multiple times using a loop
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length); // random select a character from the variable
        code += str.charAt(char); // accumulate the generated character into a string of 8
    }
    return code; // return the final accumulated string when loops ends
}

// Get HTML element to display
document.getElementById("codes").innerText = generateCode();

// Disable button function
function disableButton(btnvalue) {
    var submitBtn = document.getElementById("submit");
    submitBtn.disabled = btnvalue; // enable/disable button

    if (btnvalue) { // if button is disabled
        submitBtn.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        submitBtn.style.color = "rgba(255, 255, 255, 0.5)";
    } else { // if button is enabled
        submitBtn.style.backgroundColor = "rgba(73, 119, 209, 1)";
        submitBtn.style.color = "rgba(255, 255, 255, 1)";
    }
}

// Listen to user input code
var codebox = document.getElementById("codeentered"); // get textbox
if (codebox) {
    codebox.addEventListener("input", evaluateCode); // listen to code entered in textbox
}

// Run function if detected user had entered a character in textbox
function evaluateCode() {
    getCode = document.getElementById("codeentered").value; // get character entered
    var charset1 = getCode.trim(); // remove any hidden entered
    var charset2 = code.trim(); // remove any hidden characters generated
    // test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 === charset2) {
        disableButton(false);
    } else {
        disableButton(true);
    }
}

// Initially disable the button on page load
document.addEventListener("DOMContentLoaded", function() {
    disableButton(true);
});