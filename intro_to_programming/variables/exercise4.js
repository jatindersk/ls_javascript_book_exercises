const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// (Incorrect) For the first three console expressions, we will get an output with Victor and for the last three expressions we will get an output with Joe in the output text.
// This is because, in the second half of the code variable NAME isn't declared with a const or let keyword and so NAME has a global scope. It will overwrite the original NAME variable 
// declared with a const keyword and  change it's value from 'Victor' to 'Joe' for last three expressions.

Solution
The program first greets Victor 3 times. It then encounters an error on line 6, which prevents it from greeting Joe. 
The problem is that constants are, well, constant. You can't reassign a constant after defining it. You must use regular variables instead: