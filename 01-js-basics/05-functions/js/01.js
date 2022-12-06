/**
 **In this exercise we will work with our first JavaScript function. In the code below we create a function named func. This way of creating functions is called function declaration: the keyword function followed by the name of the function and a pair of parentheses. Then follows some JavaScript code wrapped by curly braces.
 ** Notice that we use the return keyword to make the function return a value, in this case a string.
 ** When we create a function in JavaScript, the statement inside the curly braces is exectued only when the function is called. You can call a ** function by using its name and a pair of parentheses func().
 ** Below, we call our function and assign its return value to the variable result. Then, we log the result. To solve this exercise simply have the ** console.log() statement log the words hello world.
 */

function func() {
  return 'hello world';
}
const result = func();
console.log(result);
