for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// PARTIALLY CORRECT:::
  // It will not produce and error. The code will produce 1 as an output to the console.
  // This is because the for loop's increment/decrement expression part hasn't been defined so the loop never begins next iteration after completing it's first iteration.

// LS solution::::
  // The code doesn't produce an error since all 3 components of the for loop are optional. 
  // In this code, we omit the "next value" component; however, this isn't a problem here since we increment the loop variable on line 2.

// *** REFER TO LS SOLUTION FOR MORE IMPORTANT INFO ***

