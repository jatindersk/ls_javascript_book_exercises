let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let resultArray = [];

myArray.map(num => {
  if (num % 2 === 0) resultArray.push('even'); //return console.log('even');
  resultArray.push('odd'); //console.log('odd');
});

console.log(resultArray);

// NOTE: we do not need to declare an empty array (resultArray) separately and directly assign the resultArray variable to map method outcome.
// This is bcz map method returns an array itself containing the elements whose values depend upon the caller array elements.