// function evenOrOdd(num) {
//   switch (num) {
//     case (Number.isInteger(num)):
//       if (num % 2 === 0) {
//         console.log(`even`);
//       }else {
//         console.log(`odd`);
//       }
//       break;
//     default:
//       return console.log(`Error: ${num} is not an integer!`);
//       break;
//   }
//   }; 

// NOTE-------------------------------------
// In the above attempt, I was wrong to use the switch statement bcz JS evaluates the expression in line 2 and compares it's value with the value of first matching case value.
// So, in the above case the expression's value will always be a number whereas the case value will be a boolean so it will always fail the comparison and so this approach is incorrect.

function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    return console.log(`Error: ${num} is not an integer!`);
  }

    if (num % 2 === 0) {
      console.log(`even`);
    }else {
      console.log(`odd`);
    }
  };
  
evenOrOdd(8);
evenOrOdd(9);
evenOrOdd(5.96);
evenOrOdd(2.00);
evenOrOdd(3.00);
evenOrOdd(8/5);