function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// (partially incorrect: Forgot to notice missing break statement) 
// The above code will log Product2 to the console because argument '113' passed into the function call is strictly equal to the case value of '113'.

// LS solution ::::
// Since the case clauses of the switch statement lack break statements, control falls through from the matching case '113' clause and executes 
// the code in the case '142' and default clauses as well JavaScript doesn't care that the criteria for extra case clauses don't match our serial value. 
// The fall-through behavior is often undesirable. To avoid it, you must add break statements to each case clause:

