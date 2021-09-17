const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
// const display = document.querySelector("#display");

// numberButtons.addEventListener("click", updateDisplay);

numberButtons.forEach(() => {
  addEventListener("click", updateDisplay);
});

function updateDisplay(e) {
  const display = e.target.value;
  document.getElementById("display").innerText += display;
  console.log(e.target.value);
}
