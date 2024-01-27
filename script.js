// PROTOTYPE ONE STATUS //
/*
Basic operations work for addition, subtraction, multiplication and division
BUG: After pressing equals, we can keep adding numbers onto the resulting sollution, this becomes the new num2
if we then run the operation again it adds this new num2 onto the old num1
-Should there be a current num variable that becomes the current subject of the opperations?


//SEEMS TO BE RESOLVLED BY CURRENT NUM
BUG: If we have a sum such as 6+4, the result is 10.
If I then say +2, the result is 8. It adds the new number to the old num1 rather than the sollution number.#
-Should there be a current num variable that becomes the current subject of the opperations?
*/

let num1;
let num2;
let operator;
let oppSelected = false;
let sollution;
let currentNum;

const numBtns = document.querySelectorAll(".calcBtn");
const oppBtns = document.querySelectorAll(".oppBtn");
const screen = document.querySelector("#calcScreen");
const equals = document.querySelector("#equalsBtn");

//Create the functions that populate the display when you click the number buttons.
numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    if (oppSelected === false) {
      //for display purposes, we're appending the input value to the screen node
      const enteredNum = document.createElement("text");
      enteredNum.textContent = numBtn.value;
      screen.appendChild(enteredNum);
      currentNum = parseInt(screen.textContent);
      num1 = currentNum;
      console.log("num1: " + num1);
    } else {
      //for display purposes, we're appending the input value to the screen node
      const enteredNum = document.createElement("text");
      screen.textContent = "";
      enteredNum.textContent = "";
      enteredNum.textContent = numBtn.value;
      screen.appendChild(enteredNum);
      currentNum = parseInt(screen.textContent);
      //the actual value entered on screen
      num2 = parseInt(screen.textContent);
      console.log("num2: " + num2);
    }
  });
});

//setting the event listeners on our operator buttons
oppBtns.forEach((oppBtn) => {
  oppBtn.addEventListener("click", () => {
    screen.textContent = "";
    oppSelected = true;
    operator = oppBtn.value;
    console.log(operator);
  });
});

equals.addEventListener("click", () => {
  screen.textContent = "";
  sollution = operate(operator, num1, num2);
  currentNum = sollution;
  console.log(currentNum);
  num1 = currentNum;

  console.log("cur: " + currentNum);
  const screenSollution = document.createElement("text");
  screenSollution.textContent = sollution;
  screen.appendChild(screenSollution);
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
//this implies our nums should be stored in an array
const multiply = function (a, b) {
  // return arr.reduce((total, index) => total * index);
  return a * b;
};

//divide
const divide = function (a, b) {
  return a / b;
};

//will call a different opperation depending on opperator
//this will probably be added to the = key
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

/*
Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, 
utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.

You should already have the code that can populate the display, so once operate() has been called, update the display 
with the ‘solution’ to the operation. This is the hardest part of the project. 

You need to figure out how to store all the values and call the operate function with them. 
Don’t feel bad if it takes you a while to figure out the logic.
*/

//user enters num 1
//user enters num 2
//user enters the opertor
//user runs operation (selects equals)
//result of operation displays on screen
