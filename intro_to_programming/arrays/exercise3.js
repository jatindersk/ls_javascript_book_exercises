let myArray = [ [1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0],];

let resultArray = [];

myArray.forEach(num => num.map(number => {
  if (number % 2 === 0) resultArray.push(number);
}));

console.log(resultArray);

// let resultArray2 = [];

// myArray.forEach(num => { 
//   resultArray2 = num.filter(number => {
//   number % 2 === 0;
// })
// console.log(resultArray2);
// });
// //console.log(resultArray2);



// for (let i = 0; i <= myArray.length; i += 1) {
//   let nestedArray = myArray[i];
//   nestedArray.filter(num => {
//     num % 2 === 0
//     console.log(num);
//   });
// };

// myArray.forEach(num => num.forEach(number => {
//   if (number % 2 === 0) return console.log(number);
// }));