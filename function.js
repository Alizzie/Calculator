//<<<<----------- Theme Toggler -------------------->>>>>>>
function checkTheme(value) {

  if (value == "1"){
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

  if (firstOperand){
    operand1 = Number(number);
  } else {
    operand2 = Number(number);
  }
}

//----------------------------Display------------------------->>>>>>>>>
function updateDisplay() {
  console.log("Display Type: " + typeof number);
  display.innerText = number;

}
