let displayValue = "0";

function updateDisplay() {
    document.getElementById("display").innerText = displayValue;
}

function appendToDisplay(val) {
    if (displayValue === "0" || displayValue === "Error") {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === "") {
        displayValue = "0";
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function toggleSign() {
    if (displayValue !== "0" && displayValue !== "Error") {
        displayValue = (parseFloat(displayValue) * -1).toString();
        updateDisplay();
    }
}

function calculate() {
    try {
        let result = new Function('return ' + displayValue.replace('%', '/100'))();
        displayValue = result.toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}
