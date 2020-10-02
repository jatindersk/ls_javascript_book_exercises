function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(5));
console.log(isNotANumber(NaN));

// This works since NaN is the only JS value that is not === to itself.
