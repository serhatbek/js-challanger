/**
 ** Using what we learned earlier, let's write a generic function that returns the last element of an array we pass to it. As you can see, we use that function to get the last element of both arrOne and arrTwo. But, the function is not complete yet. Add what's missing to get the last element of any array we pass to it – you may need to use the Array.length property.
 */

const array = ['apple', 6, 'unicorn', 7, 'Love'];

const findLastItem = (arr) => {
  const lastItem = arr[array.length - 1];
  return lastItem;
};

console.log(findLastItem(array));
