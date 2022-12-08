/**
 ** In this exercise you will learn how to abort a running loop even though its condition is still satisfied.
 ** You can use the break statement to achieve this. You can place the break statment anywhere inside the code-block of a loop. As soon as break is evaluated, the loop is terminated. Usually, you would place break behind an if condition. Then, the loop will only abort if a certain condition met.
 ** In the example below, we iterate through the elements of the array mixed. In each iteration, we append the current element of mixed to the new array newArray. But, in this exercise we want to abort the loop if the current element is not of type number.
 ** Complete the if statement below and execute break if the current element is not of type number.
 */

const array = [8, 3, 1, 'apple', 6, 'unicorn', 7, 'Love'];
const newArray = [];

for (let i = 0; i < array.length; i++) {
  if (!isNaN(array[i])) {
    newArray.push(array[i]);
  } else {
    console.log('non num', array[i]);
    console.log('newArray', newArray);
    break;
  }
}
