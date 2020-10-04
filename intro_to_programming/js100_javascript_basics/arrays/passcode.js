let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Alternate LS Solution
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
let joinedPasscode = '';

for (let i = 0; i < passcode.length; i += 1) {
  if (i > 0) {
    joinedPasscode += '-';
  }

  joinedPasscode += passcode[i];
}

console.log(joinedPasscode);

// My Solution
console.log(passcode.join('-'));