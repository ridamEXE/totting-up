let tempNumber = +0;
let tempResult = +0;
let result = +0;
let log = "";

let equation = {
  firstOperand: +0,
  secondOperand: +0,
  operand: "+"
};

function reset() {
  equation.firstOperand = +0;
  equation.secondOperand = +0;
  equation.operand = "+";

  displayInputField.innerText = 0;
  displayResultField.innerText = 0;
  displayLogField.innerText = "";
  result = +0;
  tempNumber = +0;
  tempResult = +0;
  log = "";

  operationLogo[0].style.color = "var(--color-very-light-notActive)";
  operationLogo[1].style.color = "var(--color-very-light-notActive)";
  operationLogo[2].style.color = "var(--color-very-light-notActive)";
  operationLogo[3].style.color = "var(--color-very-light-notActive)";

  displayInputField.style.color = "var(--color-active)";
  displayResultField.style.color = "var(--color-notActive)";
}

function iconEffect(icon) {
  if (icon === "+") {
    operationLogo[0].style.color = "var(--color-active)";
    operationLogo[1].style.color = "var(--color-very-light-notActive)";
    operationLogo[2].style.color = "var(--color-very-light-notActive)";
    operationLogo[3].style.color = "var(--color-very-light-notActive)";
  }
  else if (icon === "-") {
    operationLogo[0].style.color = "var(--color-very-light-notActive)";
    operationLogo[1].style.color = "var(--color-active)";
    operationLogo[2].style.color = "var(--color-very-light-notActive)";
    operationLogo[3].style.color = "var(--color-very-light-notActive)";
  }
  else if (icon === "*") {
    operationLogo[0].style.color = "var(--color-very-light-notActive)";
    operationLogo[1].style.color = "var(--color-very-light-notActive)";
    operationLogo[2].style.color = "var(--color-active)";
    operationLogo[3].style.color = "var(--color-very-light-notActive)";
  }
  else if (icon === "/") {
    operationLogo[0].style.color = "var(--color-very-light-notActive)";
    operationLogo[1].style.color = "var(--color-very-light-notActive)";
    operationLogo[2].style.color = "var(--color-very-light-notActive)";
    operationLogo[3].style.color = "var(--color-active)";
  }
}

function partialResult(val) {
  equation.secondOperand = val;

  if (equation.operand === "+") tempResult = equation.firstOperand + equation.secondOperand;
  else if (equation.operand === "-") tempResult = equation.firstOperand - equation.secondOperand;
  else if (equation.operand === "*") tempResult = equation.firstOperand * equation.secondOperand;
  else if (equation.operand === "/") {
    if (equation.secondOperand === 0) alert("division by zero!");
    else tempResult = equation.firstOperand / equation.secondOperand;
  }

  displayResultField.innerText = tempResult;
}

function commitResult(val) {
  equation.secondOperand = val;

  if (equation.operand === "+") result = equation.firstOperand + equation.secondOperand;
  else if (equation.operand === "-") result = equation.firstOperand - equation.secondOperand;
  else if (equation.operand === "*") result = equation.firstOperand * equation.secondOperand;
  else if (equation.operand === "/") {
    if (equation.secondOperand === 0) alert("division by zero");
    else result = equation.firstOperand / equation.secondOperand;
  }

  displayResultField.innerText = result;
  equation.firstOperand = result;
}

function logEntry(val) {
  if (val === "=" || val==="Enter") {
    log = "";
  }
  else {
    log += val;
    displayLogField.innerText = log;
  }
  // console.log(log);
}

function actionOnDisplay(btn) {
  // const button = btn.target.innerText;
  let button;

  //input from keyboard
  if (btn.type === "keyup") button = btn.key;
  else button = btn.target.innerText;

  if (button === "AC" || button==="Escape") reset();
  else if (button >= "0" && button <= "9") {
    tempNumber = tempNumber * 10 + +button;
    displayInputField.innerText = tempNumber;

    partialResult(tempNumber);
    logEntry(button);
  }
  else if (button === "+" || button === "-" || button === "*" || button === "/") {
    commitResult(tempNumber);
    iconEffect(button);

    tempNumber = 0;
    equation.operand = button; //this updation is very important step to achieve user friendly intraction
    displayInputField.innerText = 0;
    log = tempResult;
    logEntry(button);
  }
  else if (button === "=" || button==="Enter") {
    displayResultField.innerText = `= ${tempResult}`;
    displayInputField.innerText = 0;
    logEntry(button);

    equation.firstOperand = 0;
    equation.secondOperand = 0;
    equation.operand = "+";

    // log += ` = ${tempResult}`;
    result = +0;
    tempNumber = +0;

    operationLogo[0].style.color = "var(--color-very-light-notActive)";
    operationLogo[1].style.color = "var(--color-very-light-notActive)";
    operationLogo[2].style.color = "var(--color-very-light-notActive)";
    operationLogo[3].style.color = "var(--color-very-light-notActive)";

    displayResultField.style.color = "var(--color-active)";
    displayInputField.style.color = "rgb(110, 110, 110)";
  }
}