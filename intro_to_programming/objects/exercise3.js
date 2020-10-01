// let myArray = [{ name : 'Jatinder'}, {age : 28}, {gender: 'male'
// }];

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// };

// LS Solution
let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
// Our array-like object isn't a perfect mimic of a regular JavaScript array, however. 
// In particular, it doesn't modify the length property when you add or delete elements. It also doesn't support methods like forEach, filter, and push.