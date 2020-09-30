let numbers = [3, 5, 7];

let sumOfSquares = numbers => {
  return numbers.reduce((accumulator, element) => accumulator + element * element, 0);
};

console.log(sumOfSquares(numbers)); // => 83