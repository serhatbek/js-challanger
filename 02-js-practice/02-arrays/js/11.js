/**
 **
 **Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in ascending order.
 **
 **
 */

const myFunc = (a) => {
  return a.sort((c, d) => {
    return c - d;
  });
};

const num = [3, 22, 5, 81, 9, 42, 36];
console.log(myFunc(num));
