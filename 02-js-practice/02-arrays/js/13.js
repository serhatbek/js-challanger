/**
 **
 **Write a function that takes an array of numbers as argument. It should return the average of the numbers.
 **
 **
 */

const myFunc = (a) => {
  let average = 0;
  let total = 0;
  a.map((num) => {
    total = total + num;
  });
  average = total / a.length;
  return average;
};

const num = [3, 22, 5, 81, 9, 42, 36];

console.log(myFunc(num));

// with reduce

const myFuncReduce = (a) => {
  const numTotal = a.reduce((total, current) => total + current, 0);
  const average = numTotal / a.length;
  return average;
};

console.log('with reduce', myFuncReduce(num));
