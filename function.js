//<<<<<<------------------ Calculator  -------------------->>>>>>>
const numbers = Array.from(document.getElementsByClassName("key"));
const operators = Array.from(document.getElementsByClassName("operator"));
const equal = document.getElementsByClassName("equal")[0];
const reset = document.getElementsByClassName("reset")[0];
const del = document.getElementsByClassName("del")[0];

let pOperand = ""; //Previous operand
let cOperand = ""; //current Operand
let operator = undefined;
let result = "";

class Calculator {
  constructor(cOperand, pOperand, operator, result) {
    this.pOperand = pOperand;
    this.cOperand = cOperand;
    this.operator = operator;
    this.result = result;
  }

  addNum(number) {

    if(this.pOperand == this.result && this.result !== ""){
      this.result = "";
      this.cOperand = "";
    }

    if (this.cOperand == this.result && this.result !== "") {
      this.cOperand = number;
      this.result = "";
    }
    else if ((this.cOperand == "" || this.cOperand == "-") && number == ".") {
      this.cOperand = String(this.cOperand) + "0.";
    }
    else if (number === "." && this.cOperand.includes(".") || this.cOperand.length == 14) {
      return;
    }
    else if (this.cOperand == "0"){
      this.cOperand = number;
    }
    else {
      this.cOperand = String(this.cOperand) + String(number);
    }
  }

  setOperation(operator) {

    if(this.pOperand == this.result && this.pOperand !== ""){
      this.operator = operator;
      this.cOperand = "";
      this.result = "";
      return;
    }

    if (this.cOperand === "" && operator == "-") {
      this.cOperand = "-";
      this.updateDisplay();
    } else if (this.cOperand == "-" && operator == "-") {
      this.cOperand = "";
      this.updateDisplay();
    } else if (this.cOperand === "") {
      return;
    } else {

      if (this.pOperand != "") {
        this.calculate();
        this.updateDisplay();
      }

      this.operator = operator;
      this.pOperand = this.cOperand;
      this.cOperand = "";
    }
  }

  calculate() {

    let current = Number(this.cOperand);
    let prev = Number(this.pOperand);

    switch (this.operator) {
      case "+":
        this.result = current + prev;
        break;
      case "-":
        this.result = prev-current;
        break;
      case "x":
        this.result = prev * current;
        break;
      case "/":
        this.result = prev / current;
        break;
      default:
        return;
    }


    if (String(this.result).length > 14) {
      this.result = Number(this.result).toExponential(8);
    }

    display.innerText = this.result;
    this.pOperand = this.result;
  }

  del() {

    if (this.pOperand == this.result && this.result !== ""){
      this.cOperand = "";
      this.result = "";
      return;
    }

    if(this.cOperand.slice(0,-1) == ""){
      this.cOperand = "0";
    } else {
      this.cOperand = this.cOperand.slice(0, -1);
    }
  }

  clear() {
    this.cOperand = "";
    this.pOperand = "";
    this.operator = undefined;
  }

  updateDisplay() {
    display.innerText = this.cOperand.toString();
  }
}

const calculator = new Calculator(cOperand, pOperand, operator, result);

//<------------------ Add Functionality to Keys ------------->>>>>
numbers.forEach(button => button.addEventListener("click", () => {
  calculator.addNum(button.innerText);
  calculator.updateDisplay();
}));
//-------------------------------------------------------------------------------
operators.forEach(button => button.addEventListener("click", () => {
  calculator.setOperation(button.innerText);
}))
//----------------------------------------------------------------------------
equal.addEventListener("click", () => {
  calculator.calculate();
})
//-----------------------------------------------------------------------------
reset.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
//----------------------------------------------------------------------------
del.addEventListener("click", () => {
  calculator.del();
  calculator.updateDisplay();
});
