//<<<<----------- Theme Toggler -------------------->>>>>>>
function checkTheme(value) {

  if (value == "1") {
    colors.className = "theme2";
    sessionStorage.setItem("theme", "1");
  } else if (value == "2") {
    colors.className = "theme3";
    sessionStorage.setItem("theme", "2");
  } else {
    colors.className = "theme1";
    sessionStorage.setItem("theme", "0");
  }
}

//<<<<<<<------------------ Calculator ------------------->>>>>>>>
function addNum(num) {
  console.log("Number: " + number + " Type: " + typeof number);
  console.log("Nummer: " + num + " Type: " + typeof num);
  return String(number + num);
}

function saveOperand() {
  if (firstOperand) {
    operand1 = Number(number);
  } else {
    operand2 = Number(number);
  }
}

function calculate(op) {
  console.log("Operand1: " + operand1 + " Type: " + typeof operand1);
  console.log("Operand2: " + operand2 + " Type: " + typeof operand2);

  switch (op) {
    case "+":
      number = String(operand1 + operand2);
      break;
    case "-":
      number = String(operand1 - operand2);
      break;
    case "x":
      number = String(operand1 * operand2);
      break;
    case "/":
      number = String(operand1 / operand2);
      break;
    default:
      display.innerText = "Error";
      break;
  }
  console.log("Nummer: " + number + " Type: " + typeof number);
}

//----------------------------Display------------------------->>>>>>>>>
function updateDisplay() {
  console.log("Display Type: " + typeof number);
  display.innerText = number;
}
