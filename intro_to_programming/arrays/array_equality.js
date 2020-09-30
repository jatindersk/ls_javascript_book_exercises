function arrayEquality(arr1, arr2)  {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

console.log(arrayEquality([1, 2, 3], [1, 2, 3]));
console.log(arrayEquality([1, 5, 3], [1, 2, 3]));
console.log(arrayEquality([1, 2, 3], [1, 2, 3]));