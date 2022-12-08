/**
 ** In this exercise you will learn how to create a while loop. This loop is very similar to a for loop. The syntax is while (condition) { statement }. It reads: As long as the condition is met, execute the statement. It's basically an if statement that is repeated until the condition is no longer met.
 ** In the example below we execute a while loop. As long as the condition of the loop is met, num increases by 2 and i by 1. Adjust the condition of the while loop so that the final value of num is 60.
 */

let i = 0;
let num = 0;

while (i <= 29) {
  i++;
  num += 2;
  num === 60 ? console.log('60', num) : '';
}
