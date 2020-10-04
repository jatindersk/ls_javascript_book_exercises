let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
let i = groceryList.length - 1;

// Your code.
do {
  console.log(groceryList.shift());
  i -= 1;
} while (i >= 0)

// LS Solution (elegant)
while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []