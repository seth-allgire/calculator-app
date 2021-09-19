const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateNumber(number) {
  const { displayValue, waitingForSecondOperand } = calculator;
  //!!!!!!THIS WORKS ABOVE FOR SOME REASON-
  //mozilla hacks- destructuring objects!!!!!! use it more!!!
  if (waitingForSecondOperand === true) {
    calculator.displayValue = number;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? number : displayValue + number;
  }

  console.log(calculator);
}

function useDecimal(decimal) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0.";
    calculator.waitingForSecondOperand = false;
    return;
  }

  if (!calculator.displayValue.includes(decimal)) {
    calculator.displayValue += decimal;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  } else if (operator === "**") {
    return firstOperand ** secondOperand;
  }
  return secondOperand;
}

function clearAll() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

function clearEntry() {
  calculator.displayValue = "0";
  calculator.waitingForSecondOperand = true;
  console.log(calculator);
}

function updateDisplay() {
  const display = document.querySelector("#operand");
  display.value = calculator.displayValue;
}
updateDisplay();

const buttons = document.querySelector(".calculator-buttons");
buttons.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains("clear-entry")) {
    clearEntry();
    updateDisplay();
    return;
  }
  if (target.classList.contains("clear-all")) {
    clearAll();
    updateDisplay();
    return;
  }
  if (target.classList.contains("decimal-point")) {
    useDecimal(target.value);
    updateDisplay();
    return;
  }

  updateNumber(target.value);
  updateDisplay();
});
