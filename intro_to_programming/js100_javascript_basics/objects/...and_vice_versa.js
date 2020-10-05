let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = {};

nestedArray.forEach(arr => {
  let key = arr[0];
  let value = arr[1];
 // let pair = arr;               // LS Solution (slightly different and elegant of-course)
 // person[pair[0]] = pair[1];
  person[key] = value;
  
});

console.log(person);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }