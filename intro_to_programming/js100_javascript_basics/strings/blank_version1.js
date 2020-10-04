let isBlank = str => {
  if (!str.length) return console.log(true);
  return console.log(false);
};

// LS Solution
function isBlank(string) {
  return string.length === 0;
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true