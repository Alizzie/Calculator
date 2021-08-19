// Theme Toggler
const colors = document.documentElement;
const toggler = document.getElementById("slider");
const display = document.getElementsByClassName("displayText")[0];

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
let operation = "";
let result = false; //Using result for more calculation
let intermediateResult = ""; //Save intermediate results

//Adding Functionality to the number Keys
numbers.forEach(numbers => numbers.addEventListener("click", function() {

  if (result) {
    result = false;
    intermediateResult = "";
    operand1 = numbers.innerText;
    updateDisplay(operand1);
  } else if (firstOperand) {

    if (operand1 == "-") {
      operand1 = -1 * parseInt(numbers.innerText);
    } else {
      operand1 = (operand1 * 10 + parseInt(numbers.innerText));
    }

    updateDisplay(operand1);
  } else {
    updateDisplay(" ");

    if (operand2 == "-") {
      operand2 = -1 * parseInt(numbers.innerText);
    } else {
      operand2 = (operand2 * 10 + parseInt(numbers.innerText));
    }

    updateDisplay(operand2);
  }
}));

//Adding Functionality to operator keys
let operatorCount = 0; // If counter == 1 => operand2 can become negative
operators.forEach(operator => operator.addEventListener("click", function() {

  //Negative Operand1
  if (operator.innerText == "-" && operand1 == "") {
    operand1 += "-";
    updateDisplay(operand1);
  }

  //Negative Operand2
  else if (operatorCount != 0) {
    operand2 += "-";
    updateDisplay(operand2);
    operatorCount--;
  }

  //Operation only when operand1 deklared
  else if (operand1 != "") {

    if (operand2 != "") {
      intermediateResult = calculate(operation);
      updateDisplay(intermediateResult);
    }

    if (operatorCount == 0) {
      operatorCount++;
    } else {
      operatorCount--;
    }

    operation = operator.innerText;
    firstOperand = false;
    result = false;
  }
}));

//Adding Functionality to del and reset Key
reset.addEventListener("click", () => clear());
del.addEventListener("click", () => updateDisplay(deleteNumber()));

//Adding Functionality to equal Key
equalKey.addEventListener("click", () => updateDisplay(calculate(operation)));
