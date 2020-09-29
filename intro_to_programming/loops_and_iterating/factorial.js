// ** Consulted LS solution


function factorial(num) {
  let result = 1;

  for (let counter = num; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result;
};

console.log(factorial(0));
console.log(factorial(4));