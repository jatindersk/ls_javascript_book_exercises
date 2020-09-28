function multiply(prompt1, prompt2) {
  let readLineSync = require('readline-sync');
  let num1 = parseFloat(readLineSync.question(prompt1));
  let num2 = parseFloat(readLineSync.question(prompt2));
  return console.log(`${num1} * ${num2} = ${num1 * num2}`);
};

multiply(`Enter the first number: `, `Enter the second number: `);

// LS Solution:

// function multiply(left, right) {
//   return left * right;
// }

// function getNumber(prompt) {
//   let readlineSync = require('readline-sync');
//   return parseFloat(readlineSync.question(prompt));
// }

// let left = getNumber('Enter the first number: ');
// let right = getNumber('Enter the second number: ');
// console.log(`${left} * ${right} = ${multiply(left, right)}`);