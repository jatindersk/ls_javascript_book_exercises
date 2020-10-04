let repeat = (count, str) => {
  let combined = '';
  for (let i = 1; i <= count; i += 1) combined += str;
  return combined;
};

// LS Solution
function repeat(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}

console.log(repeat(3, 'ha')); // 'hahaha'
