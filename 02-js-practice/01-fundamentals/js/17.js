/**
 ** Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
 */

const myFunc = (a, b) => {
  const val = a < b ? a / b : a * b;
  return val;
};

console.log(myFunc(7, 6));
