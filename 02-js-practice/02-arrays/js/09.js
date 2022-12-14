/**
 **
 **Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
 **
 **
 */

const myFunc = (a) => {
  const filterValues = a.filter((num) => {
    return num <= 0;
  }).length;
  return filterValues;
};

const arr = [2, 6, -4, 3, -9, 6, -1, -4];
console.log(myFunc(arr));
