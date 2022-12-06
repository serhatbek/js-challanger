/**
 ** When you call a function in JavaScript, you can pass values to the function. These values are called arguments. In order to access these arguments, functions can define parameters. Parameters are variables that contain the values of the arguments passed to the function.
 ** In the code below, we define a function multiply that has a parameter named num. The function returns num multiplied by itself. Then, multiply is called with an argument. The argument is the value of the variable arg.
 ** Adjust the code below so that the console.log() statement logs true.
 */

const multiply = function (num) {
  return num * num;
};

const arg = 3;

const result = multiply(arg);
console.log('3*3=9', result === 9);
