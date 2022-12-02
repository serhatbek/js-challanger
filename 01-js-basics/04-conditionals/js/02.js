/**
 **This exercise is very similar to the previous one. But, this time we also have an else statement. An else statement is another piece of code – wrapped by curly braces – that only runs if the condition is not satisfied.
 ** Adjust the condition such that the code inside the else statement will be executed and the console.log() statement logs true.
 */

let num = 0;
if (2 > 3) {
  num = 1;
} else {
  num = 2;
}
console.log('num:', num === 2);
