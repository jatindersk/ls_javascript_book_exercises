let words = ['laboratory', 'experiment', 'flab', 'Pans Labyrinth', 'elaborate', 'polar bear',];

let allMatches = (arr, reg) => {
  let matchesArray = []; // variable scoping should be as narrow as possible as per recommended practice
  arr.forEach(str => {
    if (reg.test(str)) {
      matchesArray.push(str);
    }
  });
  return matchesArray;
};

// AWESOME SOLUTION BY LS:::
function match(words, pattern) {
  return words.filter(num => pattern.test(num));
};

// allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']
console.log(allMatches(words, /lab/));
console.log(match(words, /lab/));

