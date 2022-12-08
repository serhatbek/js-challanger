/**
 **Our second for-loop exercise shows how you can use a loop to iterate over the elements of an array. In this example, we will filter numbers from an existing array. The loop iterates over each element of the array mixed. If the current element is of type number, it will append it to the array newArray.
 ** To solve this task, complete the loop expressions inside the brackets.
 */

const array = ['apple', 6, 'unicorn', 7, 'Love'];
const newArray = [];

for (let i = 1; i < array.length; i++) {
  if (!isNaN(array[i])) {
    newArray.push(array[i]);
  }
  console.log(newArray);
}
