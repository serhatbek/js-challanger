/**
 ** Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.
 */

const myFunc = (a) => {
  return a % 1 === 0 ? true : false;
};

console.log(myFunc(7.4));
