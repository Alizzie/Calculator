//<<<<---------------- Theme Toggler & Session Storage ----------------->>>>>>
const colors = document.firstElementChild.lastElementChild;
const toggler = document.getElementById("slider");
const display = document.getElementsByClassName("displayText")[0];

toggler.addEventListener("click", function() {
  checkTheme(toggler.value);
})

//<<<<---------------------- Session Storage -------------------------->>>>>>

//Situation: Reloading the page
window.onload = function test() {
  if (sessionStorage.getItem("theme") == null) {
    colors.className = "theme1";
  } else {
    toggler.value = sessionStorage.getItem("theme");
    checkTheme(toggler.value);
  }
  setTimeout(() => display.innerText = " ", 500);
}

//<<<<---------------------- Calculator Variables-------------------------->>>>>
//Necessary Calculator Keys
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
let secondOp = false; // true => operand2 can become negative

//<<<<<------------- Calculator with clicking Functionality ------------->>>>>
//Number Keys
numbers.forEach(number => number.addEventListener("click", () => {

  if (result) {
    result = false;
    intermediateResult = "";
    operand1 = number.innerText;
    updateDisplay(operand1);
  } else if (firstOperand) {

    if (operand1 == "-") {
      operand1 = -1 * parseInt(number.innerText);
    } else {
      operand1 = (operand1 + number.innerText);
    }

    updateDisplay(operand1);
  } else {
    updateDisplay(" ");

    if (operand2 == "-") {
      operand2 = -1 * parseInt(number.innerText);
    } else {
      operand2 = (operand2 + number.innerText);
    }

    updateDisplay(operand2);
  }
}));
//----------------------------------------------------------------------------
//Operator keys
operators.forEach(operator => operator.addEventListener("click", function() {

  //Negative Operand1
  if (operator.innerText == "-" && operand1 == "") {
    operand1 += "-";
    updateDisplay(operand1);
  }

  //Negative Operand2
  else if (secondOp && operator.innerText == "-") {
    operand2 += "-";
    updateDisplay(operand2);
    alert("true -> false");
    secondOp = false;
  }

  //Operation only when operand1 deklared
  else if (operand1 != "") {

    if (operand2 != "") {
      intermediateResult = calculate(operation);
      updateDisplay(intermediateResult);
    }

    if (secondOp == false) {
      alert("false -> true");
      secondOp = true;
    }

    operation = operator.innerText;
    firstOperand = false;
    result = false;
  }
}));

//----------------------------------------------------------------------------
//Del and reset Key
reset.addEventListener("click", () => clear());
del.addEventListener("click", () => updateDisplay(deleteNumber()));

//Equal Key
equalKey.addEventListener("click", () => updateDisplay(calculate(operation)));


//<<<<<----------- Calculator with Keyboard Functionality ------------->>>>
document.addEventListener("keyup", (e) => {

  //Number keys
  if (isFinite(e.key) || e.key == ".") {
    console.log(e);
    for (let i = 0; i < numbers.length; i++) {
      if (e.key == numbers[i].innerText) {
        numbers[i].click();
      }
    }
  }

  //Remaining keys
  switch (e.key) {
    case "Backspace":
      del.click();
      break;
    case "=":
    case "Enter":
      equalKey.click();
      break;
    case " ":
      reset.click();
      break;
    case "+":
      operators[0].click();
      break;
    case "-":
      operators[1].click();
      break;
    case "/":
      operators[2].click();
      break;
    case "x":
    case "*":
      operators[3].click();
      break;
  }
});
