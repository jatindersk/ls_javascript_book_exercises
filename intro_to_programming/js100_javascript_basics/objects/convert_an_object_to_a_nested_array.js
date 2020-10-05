let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);
console.log(nestedPerson);

// Alternate LS Solution
let nestedArray = [];

for (let property in person) {
  nestedArray.push([property, person[property]]);
}

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

