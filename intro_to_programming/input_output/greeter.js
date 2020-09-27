let rlSync = require('readline-sync');
let firstName = rlSync.question(`What's your first name?\n`);
let middleName = rlSync.question(`What's your middle name ${firstName}?\n`);
let lastName = rlSync.question(`What's your last name ${firstName}?\n`);
console.log(`Hello, ${firstName} ${middleName} ${lastName}!`);