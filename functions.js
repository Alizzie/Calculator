//<<<------------------ Theme Toggler ------------->>>>>>>
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

//<<<---------------- Calculator ----------------->>>>>>

//Clearing display function
function clear() {
  operand1 = "";
  operand2 = "";
  operation = "";
  intermediateResult = "";
  display.innerText = "";
  firstOperand = true;
  result = false;
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
