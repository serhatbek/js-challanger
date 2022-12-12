/**
 ** Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result
 */

const func = (str) => {
  return str.slice(0, -3);
};

console.log(func('today is my birthday'));
