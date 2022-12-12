/**
 **Write a function that takes a string (a) as argument. Extract the first half a. Return the result
 */

const myFunc = (str) => {
  let half = str.length / 2;
  let firstHalf = str.slice(0, half);
  return firstHalf;
};

console.log(myFunc('today is my birthday'));
