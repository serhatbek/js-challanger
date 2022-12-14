/**
 ** Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
 */

const myFunc = (arr, n = 0) => {
  return (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
};

const myArray = ['apple', 'banana', 'grapes', 'strawberries'];

console.log(myFunc(myArray, 2));
