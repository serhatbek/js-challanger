/**
 ** Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
 */

const myFunc = (a, b) => {
  return a.filter((num) => num != b);
};

const arr = [13, 7, 22, '7', false, 9, '22', 44, false];

console.log(myFunc(arr, false));
