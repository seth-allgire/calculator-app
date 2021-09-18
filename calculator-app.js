const calculator = {
  displayValue: "0",
  operand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateNumber(number) {
  const { displayValue } = calculator;
  //!!!!!!THIS WORKS ABOVE FOR SOME REASON!!!!!!
  calculator.displayValue =
    displayValue === "0" ? number : displayValue + number;
}

function useDecimal(decimal) {
  if (!calculator.displayValue.includes(decimal)) {
    calculator.displayValue += decimal;
  }
}

function useOperator

//   if (displayValue === "0") {
//     let number = document.getElementsByClassName("number");
//     displayValue = number;
//   } else {
//     displayValue + number;
//   }
// }

// }
//   document.querySelector("#operand").innerText += display;
//   console.log(e.target.value);

function updateDisplay() {
  const display = document.querySelector("#operand");
  display.value = calculator.displayValue;
}
updateDisplay();

const buttons = document.querySelector(".calculator-buttons");
buttons.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("operation")) {
    console.log("operation", target.value);
    return;
  }
  if (target.classList.contains("clear-entry")) {
    console.log("clear-entry", target.value);
    return;
  }
  if (target.classList.contains("clear-all")) {
    console.log("clear-all", target.value);
    return;
  }
  if (target.classList.contains("decimal-point")) {
    useDecimal(target.value);
    updateDisplay();
    return;
  }
  // if (target.classList.contains("number")) {
  updateNumber(target.value);
  updateDisplay();
  // }
});

// const numberButtons = document.querySelectorAll(".number");
// const operatorButtons = document.querySelectorAll(".operator");

// const output = document.querySelector("#operand");
// let screenDisplay = output.innerText;

// numberButtons.forEach((button) => {
//   addEventListener("click", displayNumbers);
// });

// !!!!!!THIS WORKED ONCE UPON A TIME!!! BUT LOCKED IN TO NUMBERS ONLY
// NEED TO CATCH ALL THE CLICKS ON ALL THE BUTTONS!!!!!!
// function displayNumbers(e) {
//   const display = e.target.value;
//   document.querySelector("#operand").innerText += display;
//   console.log(e.target.value);
// }

// operatorButtons.forEach((button) => {
//   addEventListener("click", displayOperator);
// });

// function displayOperator(e) {}
// }

// function updateNumbers() {
//   if (screen.innerText === "0") {
//   }
// }
