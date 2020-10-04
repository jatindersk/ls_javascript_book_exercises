let isBlank = str => {
  if (!str.length || str === ' ') return console.log(true);
  return console.log(false);
};

// LS Solution

// function isBlank(string) {
//   return console.log(string.length === 0 || string === ' ');
// }

function isBlank(string) {
  return string.trim().length === 0;
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true