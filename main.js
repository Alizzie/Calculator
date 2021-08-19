// Theme Toggler
const colors = document.documentElement;
const toggler = document.getElementById("slider");
const display = document.getElementsByClassName("displayText")[0];

function checkTheme(value) {
  if (value == "1") {
    colors.className = "theme2";
    localStorage.setItem('theme', "1");
  } else if (value == "2") {
    colors.className = "theme3";
    localStorage.setItem('theme', "2");
  } else {
    colors.className = "theme1";
    localStorage.setItem('theme', "0");
  }
}

toggler.addEventListener("click", function() {
  checkTheme(toggler.value);
})

//Situation: Returning to the page
window.onload = function test() {
  if (localStorage.getItem("theme") == null) {
    colors.className = "theme1";
  } else {
    toggler.value = localStorage.getItem("theme");
    checkTheme(toggler.value);
  }

  setTimeout(() => display.innerText = " ", 500);
}

//Clearing local Storage
document.addEventListener("keydown", function(event) {
  if (event.key == "Backspace") {
    window.localStorage.clear();
    toggler.value = 0;
    colors.className = "theme1";
    alert("Local Storage has been deleted");
  }
})

//Calculator Keys
const numbers = Array.from(document.getElementsByClassName("key"));
const operators = Array.from(document.getElementsByClassName("operator"));
const equalKey = document.getElementsByClassName("equal")[0];
const del = document.getElementsByClassName("del")[0];
const reset = document.getElementsByClassName("reset")[0];

//Operanden and Operators
let firstOperand = true; //working with first Operand
let operand1 = "";
let operand2 = "";
let operation;
let result = false; //Using result for more calculation
let intermediateResult = ""; //Save intermediate results

//Clearing display function
function clear() {
  operand1 = "";
  operand2 = "";
  operation = "";
  intermediateResult = "";
  firstOperand = true;
  display.innerText = "";
}

//Deleting Number function
function deleteNumber() {

  if (firstOperand) {
    operand1 = operand1.toString().slice(0, -1);

    if (operand1 == "") {
      operand1 = parseInt("0");
    }
    return operand1;

  } else {

    operand2 = operand2.toString().slice(0, -1);
    if (operand2 == "") {
      operand2 = parseInt("0");
    };
    return operand2;
  }
}

//Calculation function
function calculate(op) {
  switch (op) {
    case "+":
      operand1 = parseFloat(operand1) + parseFloat(operand2);
      break;
    case "-":
      operand1 = operand1 - operand2;
      break;
    case "x":
      operand1 = operand1 * operand2;
      break;
    case "/":
      operand1 = operand1 / operand2;
      break;
    default:
      break;
  }

  //Display result, result = operand1
  firstOperand = true;
  result = true;
  operand2 = "";
  return operand1;
}

//Checking length
function checkLength(num) {

  if (num.toString().length > 12) {
    num = num.toString().slice(0, 12);

    if (firstOperand) {
      operand1 = num;
    } else {
      operand2 = num;
    }

    return num;
  } else {
    return num;
  }
}

//Update Screen and screen length function
function updateDisplay(num) {

  num = checkLength(num);
  display.innerText = num;
}


//Adding Functionality to the number Keys
numbers.forEach(numbers => numbers.addEventListener("click", function() {

  if (result) {
    result = false;
    intermediateResult = "";
    operand1 = numbers.innerText;
    updateDisplay(operand1);
  } else if (firstOperand) {
    operand1 = (operand1 * 10 + parseInt(numbers.innerText));
    updateDisplay(operand1);
  } else {
    updateDisplay(" ");
    operand2 = (operand2 * 10 + parseInt(numbers.innerText));
    updateDisplay(operand2);
  }
}));

//Adding Functionality to operator keys
operators.forEach(operator => operator.addEventListener("click", function() {

  operation = operator.innerText;
  firstOperand = false;
  result = false;
}));

//Adding Functionality to del and reset Key
reset.addEventListener("click", () => clear());
del.addEventListener("click", () => updateDisplay(deleteNumber()));

//Adding Functionality to equal Key
equalKey.addEventListener("click", () => updateDisplay(calculate(operation)));
