//<<<<---------------- Theme Toggler & Session Storage ----------------->>>>>>
const colors = document.firstElementChild.lastElementChild;
const toggler = document.getElementById("slider");
const display = document.getElementsByClassName("displayText")[0];
const togNum = Array.from(document.getElementsByTagName("Span"));

togNum.forEach(num => num.addEventListener("click", (e) => {
  toggler.value = Number(e.path[0].innerText) - 1;
}));

toggler.addEventListener("click", () => {
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
  setTimeout(() => display.innerText = " ", 1000);
}

//<<<<<<------------------ Calculator Attributs -------------------->>>>>>>
const numbers = Array.from(document.getElementsByClassName("key"));
const operators = Array.from(document.getElementsByClassName("operator"));
const dot = document.getElementsByClassName("dot")[0];
const equal = document.getElementsByClassName("equal")[0];
const reset = document.getElementsByClassName("reset")[0];
const del = document.getElementsByClassName("del")[0];

let operand1 = 0;
let operand2 = 0;
let operator = "";
let number = "";

let firstOperand = true;
let intOperand = true;
let negativNum = false;

//<------------------ Add Functionality ------------->>>>>
numbers.forEach(num => num.addEventListener("click", (e) => {
  //Zusammenaddieren addNum(operand, string) -> return Num as Number
  // Speichert neuen Wert
  // Update Display

  let num = e.srcElement.innerText;
  console.log("Number: " + num + " Type: " + typeof num);

  number = addNum(num);
  saveOperand();
  updateDisplay();
}));
//----------------------------------------------------------------------------------------
dot.addEventListener("click", () => {

  if (intOperand){
    intOperand = false;

    if (number == "") {
      number = "0.";
    } else {
      number = number + ".";
    }
    updateDisplay();
  }
});
//--------------------------------------------------------------------------------------
operators.forEach(op => op.addEventListener("click", (e) => {
  console.log("Operator: " + e.srcElement.innerText + " Type: " + typeof e.srcElement.innerText);

  if (number == "" && e.srcElement.innerText == "-"){
    number = "-";
    updateDisplay();
  } else if (number == "-" && e.srcElement.innerText == "-"){
    number = "";
    updateDisplay();
  } else {
    operator = e.srcElement.innerText;
    firstOperand = false;
    intOperand = true; //For Operand2
    number = "";
  }

}))
//----------------------------------------------------------------------------
equal.addEventListener("click", () => {
  calculate(operator);
  console.log("Result: " + number);
  saveOperand();
  console.log("Operand1: " + operand1 + " Operand2: " + operand2 + " Operator: " + operator);
  updateDisplay();
})
//-----------------------------------------------------------------------------
reset.addEventListener("click", () => {
  clear();
  updateDisplay();
});
//----------------------------------------------------------------------------
del.addEventListener("click", () => {
  number = delNum();
  saveOperand();
  updateDisplay();
});
