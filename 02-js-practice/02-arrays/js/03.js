/**
 ** Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
 */

const myFunc = (a) => {
  return a.slice(-3);
};

const arr = ['apple', 'banana', 'grapes', 'strawberries', 6];

console.log(myFunc(arr));
