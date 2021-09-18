const calculator = {
  displayValue: "0",
  operand: null,
  waitingForSecondOperand: false,
  operator: null,
};

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
    console.log("decimal", target.value);
    return;
  }
  // if (target.classList.contains("number")) {
  console.log("number", target.value);
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
