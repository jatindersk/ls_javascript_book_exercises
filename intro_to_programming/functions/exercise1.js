let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// Output will be 1. Executing the bar function will not have any effect on the output. This is because the bar variable declared and initiated inside the foo function is block scoped and
// will not effect the bar variable declared with global scope.