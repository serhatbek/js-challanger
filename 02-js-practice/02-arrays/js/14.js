/**
 **
 **
 **Write a function that takes an array of strings as argument. Return the longest string.
 **
 */

const longString = (arr) => {
  return arr.sort((a, b) => {
    return b.length - a.length;
  })[0];
};

const strArr = ['banana', 'a', 'bird', 'flowers in the garden', 'sea'];

console.log(longString(strArr));

// with reduce

const myFunc = (arr) => {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
};

console.log('with reduce', myFunc(strArr));
