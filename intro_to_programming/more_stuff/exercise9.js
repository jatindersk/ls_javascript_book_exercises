function negativeZero(value) {
  if (1 / value === -Infinity) return true;
  return false;
};

// LS Solution (more concise)
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

// Another LS solution
function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity);
}

console.log(negativeZero(-0));
console.log(negativeZero(0));