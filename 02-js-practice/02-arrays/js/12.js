/**
 **
 **Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
 **
 **
 */

const myMap = (a) => {
  let total = 0;

  a.map((num) => {
    total += num;
  });
  return total;
};

const num = [3, 22, 5, 81, 9, 42, 36];
console.log('map', myMap(num));

/**********/

const myReduce = (a) => {
  return a.reduce((acc, cur) => acc + cur, 0);
};

const numReduce = [3, 22, 5, 81, 9, 42, 36];
console.log('reduce', myReduce(numReduce));
