let num1;
let num2;
let operator;

const calcBtn = document.querySelector("#calcBtn");
calcBtn.addEventListener("click", () => {
  console.log("test");
});

//add
const add = function (a, b) {
  return a + b;
};

//subtract
const subtract = function (a, b) {
  return a - b;
};

//multiply
const multiply = function (arr) {
  return arr.reduce((total, index) => total * index);
};

//divide
const divide = function (a, b) {
  return a / b;
};

//will call a different opperation depending on opperator
const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
};

console.log(operate("+", 3, 9));
