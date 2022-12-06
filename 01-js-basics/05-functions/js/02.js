/**
 ** In this exercise, we use a slightly different way to create a function – a function expression. Here, we create a function and assign it to the variable func. Notice that we omit the name of the function after the function keyword. We call this function the same way as in the previous exercise. But, instead of using the name of the function itself, we call it using the name of the variable to which the function was assigned.
 **In the code below, we introduced a small mistake when calling the function. Find the mistake and run the code to see if the words hello world are correctly logged.
 */

const func = function () {
  return 'hello world';
};
const result = func();
console.log(result);
