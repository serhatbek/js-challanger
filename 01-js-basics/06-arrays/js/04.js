/**
 ** You can put any value inside an array. Here, the array named arr even contains another array. You can also insert values from other variables into the array.Insert the value of the variable string into the arr. Insert it in the right place so that the console.log() statement logs true.
 */

const arr = ['apple', 6, 'unicorn', 7, ['kindness', 8]];

const pet = 'cat';

arr[4].push(pet);

console.log(arr[4][2] === 'cat');
