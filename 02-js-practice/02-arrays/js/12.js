/**
 **
 **Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
 **
 **
 */

const myFunc = (a) => {
  let total = 0;

  a.map((num) => {
    total += num;
  });
  return total;
};

const num = [3, 22, 5, 81, 9, 42, 36];
console.log(myFunc(num));
