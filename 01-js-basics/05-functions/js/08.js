/**
 ** As we have seen in a previous exercise, a return statement blocks any code following the statement from being executed. But, this is only true if the return statement actually runs. Using an if...statement, we can prevent a code from being executed if a condition is not met.
 ** In the code below we use this pattern to stop a function early if the parameter num is smaller than 5.
 ** djust the code so that the value of result is 25.
 */

const ifSmaller = (a) => {
  return a < 18 ? 'smaller' : 'bigger';
};

const num = 9;

console.log(ifSmaller(num));
