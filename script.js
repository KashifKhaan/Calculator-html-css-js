let result = document.getElementById("result");

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

// New: Listen for keyboard events
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;
    if (/^[0-9+\-*/.=]$/.test(key)) {
        event.preventDefault(); // Prevent the default action of typing on the page
        if (key === "=") {
            calculate();
        } else {
            appendToResult(key);
        }
    } else if (key === "Backspace") {
        clearResult();
    }
}
