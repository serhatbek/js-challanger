/**
 ** Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting
 */

const myFunc = (a) => {
  const digits = a.toString().split('');
  const realDigits = digits.map(Number);
  return realDigits;
};

console.log(myFunc(24));
