/**
 ** Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.
 */

const myFunc = (a, b, c, d, e, f) => {
  // return ((a + b - c) * d) / e ** f;
  let num = ((a + b - c) * d) / e;
  return Math.pow(num, f);
};

console.log(myFunc(133, 142, 25, 8, 5, 7));
