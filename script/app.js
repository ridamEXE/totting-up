const displayLogField = document.getElementById("history-log");
const displayInputField = document.getElementById("input-text");
const displayResultField = document.getElementById("result-text");

const operationLogo = document.querySelectorAll("#operation-symbol span");
const calculatorBtns = document.querySelectorAll("main button");

for (const calculatorBtn of calculatorBtns) {
    calculatorBtn.addEventListener("click", actionOnDisplay);
}

document.body.addEventListener("keyup", actionOnDisplay);