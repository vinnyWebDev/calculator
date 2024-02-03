//PROTOTYPE TWO TODOS//
/**
 * Very solid attempt, well done.
 *
 * BUG: With current sollution we can only enter a single digit num1 value
 * 12 + 7 - 5 * 3 = should yield 42, not 36. You have to indidiually run each opperatrion to get that result
 */

//variables which will be used during calculation
let currentNum;
let num1;
let num2;
let operator;
let oppSelected = false;

//will be used to store variable appended to screen
let screenNum = document.createElement("text");

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
  //we are slecting num1 (current num) because oppSelected is false
  numBtn.addEventListener("click", () => {
    if (oppSelected === false) {
      screenNum.textContent += numBtn.value;
      screen.appendChild(screenNum);
      num1 = parseInt(screenNum.textContent);
      currentNum = num1;
      console.log("Num1: " + num1);
    }
    //An operator has been selected, oppSelected now true, we move on to num2
    else {
      screenNum.textContent += numBtn.value;
      screen.appendChild(screenNum);
      num2 = parseInt(screenNum.textContent);
      console.log("Num2: " + num2);
      currentNum = operate(operator, num1, num2);
      console.log("current num " + currentNum);
      console.log("num1 " + num1);
    }
  });
});

//event listeners assigned to operator buttons
oppBtns.forEach((oppBtn) => {
  oppBtn.addEventListener("click", () => {
    //the second operation must happen here??
    oppSelected = true;
    console.log(currentNum);
    num1 = currentNum;
    screenNum.textContent = "";
    operator = oppBtn.value;
    console.log(operator);
  });
});

//event listner for when equals is pressed
equals.addEventListener("click", () => {
  screenNum.textContent = "";
  screenNum.textContent = currentNum;
  //reassign num1 to the result of the evaluation
  num1 = currentNum;
  //the operation has been complete, we reset oppSelected to false so a new operation begins if a new numer is selected
  oppSelected = false;
});
