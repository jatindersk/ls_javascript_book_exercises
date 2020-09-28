function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// (Incorrect) Empty. Bcz, empty array just like empty string '' is a falsy value and will execute else statement.

// LS solution::::
// The output is Not Empty since, while the array is empty—it has no elements and the .length property is 0—it isn't falsy. 
// Thus, JavaScript executes the if (arr) branch of the if statement.

