//PROTOTYPE TWO//

//variables which will be used during calculation
let currentNum;
let num2;
let operator;
let oppSelected = false;

//variables referencing nodes in DOM
const numBtns = document.querySelectorAll(".calcBtn");
const oppBtns = document.querySelectorAll(".oppBtn");
const screen = document.querySelector("#calcScreen");
const equals = document.querySelector("#equalsBtn");

//the basic maths operations we will be calling
//add
const add = function (a, b) {
  return a + b;
};

//subtract
const subtract = function (a, b) {
  return a - b;
};

//multiply
const multiply = function (a, b) {
  return a * b;
};

//divide
const divide = function (a, b) {
  return a / b;
};

//Function determining which maths operations to call depending on the operator selected
const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
};

//Event listeners assigned to number buttons
numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    console.log(numBtn.value);
  });
});

//event listeners assigned to operator buttons
oppBtns.forEach((oppBtn) => {
  oppBtn.addEventListener("click", () => {
    console.log(oppBtn.value);
  });
});
