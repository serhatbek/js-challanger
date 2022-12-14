/**
 ** Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
 */

const myFunc = (a) => {
  return a.splice(-3);
};

const arr = ['apple', 'banana', 'grapes', 'strawberries', 6];

console.log(myFunc(arr));
