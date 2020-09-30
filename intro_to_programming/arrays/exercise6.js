let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.map(str => str.length).filter(el => el % 2 === 1); // odd numbers leave a remainder of 1 when divided by 2
};

console.log(oddLengths(arr)); // => [1, 5, 3]