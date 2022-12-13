/**
 ** Write a function that takes a number (a) as argument. Round a to the 2nd digit after the comma. Return the rounded number
 */

const myFunc = (a) => {
  return a.toFixed(2);
};

console.log(myFunc(3.136));
