/**
 ** In this exercise, the function func defines the parameters a and b. But, currently only 1 argument is passed to the function. Therefore, the value of b is undefined.
 ** Adjust the code below so that the console.log() statement logs hello world.
 */

const sayHello = (a, b) => {
  return `${a} ${b}`;
};

const text1 = 'Hello',
  text2 = 'World';

const result = sayHello(text1, text2);
console.log(result);
