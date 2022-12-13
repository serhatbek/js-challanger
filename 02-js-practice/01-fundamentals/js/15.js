/**
 ** Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
 */

const myFunc = (a, b) => {
  const count = b.split(a).length - 1;
  return count;
};

const str = 'The quick brown fox jumps over the lazy dog.',
  str2 = 'o';

console.log(myFunc(str2, str));
