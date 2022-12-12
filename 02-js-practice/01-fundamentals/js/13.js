/**
 ** Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation
 */

const myFunc = (a, b) => {
  return a.includes(b) ? b + a : a + b;
};

console.log(myFunc('catholic', 'ol'));
