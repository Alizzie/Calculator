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
function addNum(operand, num) {
  console.log("Operand: " + operand + " Type: " + typeof operand);
  console.log("Nummer: " + num + " Type: " + typeof num);

  return Number(operand+num);

}


//----------------------------Display------------------------->>>>>>>>>
function updateDisplay() {

  if(firstOperand){
    display.innerText = operand1;
  } else {
    display.innerText = operand2;
  }
}
