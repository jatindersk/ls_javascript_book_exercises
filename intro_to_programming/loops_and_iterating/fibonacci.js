// function fibonacci(num) {
//   if (num < 2) return num;
//   return fibonacci(num -1) + fibonacci(num -2);
// };

// Alternate way of writing fibonacci function as per wikipedia page info on fibonacci series

function fibonacci(num) {
  if (num > 1) return fibonacci(num -1) + fibonacci(num -2);
  return num;
};

console.log(fibonacci(1));
console.log(fibonacci(6));
console.log(fibonacci(20));