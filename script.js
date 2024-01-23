let num1;
let num2;
let operator;

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
