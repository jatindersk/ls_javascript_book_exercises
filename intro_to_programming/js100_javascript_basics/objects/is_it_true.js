let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// This is because we are iterating over the key names of the object obj. Since, the key names are inherently of 'String' data type and as we have used the strict equality
// operator which checks for matching data type and value. It returns false for all the key names as the operand to the right side of strict quality operator is a boolean. 