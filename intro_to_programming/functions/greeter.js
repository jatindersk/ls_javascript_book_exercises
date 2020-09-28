// let rlSync = require('readline-sync');

// function askName() {
//   let firstName = rlSync.question(`What's your first name?\n`);
//   let lastName = rlSync.question(`What's your last name ${firstName}?\n`);
//   return console.log(`Hello, ${firstName} ${lastName}!`);
// };

// askName();

function askName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = askName(`What's your first Name?\n`);
let lastName = askName(`What's your last Name?\n`);
console.log(`Hello, ${firstName} ${lastName}`);