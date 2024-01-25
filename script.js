let num1;
let num2;
let operator;
let screenValue;

const numBtns = document.querySelectorAll(".calcBtn");
const screen = document.querySelector("#calcScreen");

//Create the functions that populate the display when you click the number buttons.
numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    //for display purposes, we're appending the input value to the screen node
    const num = document.createElement("text");
    num.textContent = numBtn.value;
    screen.appendChild(num);
    screenValue = screen.textContent;
    console.log(screenValue);
  });
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

/*
Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, 
utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.

You should already have the code that can populate the display, so once operate() has been called, update the display 
with the ‘solution’ to the operation. This is the hardest part of the project. 

You need to figure out how to store all the values and call the operate function with them. 
Don’t feel bad if it takes you a while to figure out the logic.
*/
