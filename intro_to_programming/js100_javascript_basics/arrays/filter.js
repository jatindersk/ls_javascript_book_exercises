let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

scores.filter(num => {
  if (num >= 100) count += 1;
});

// LS solution
for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count += 1;
  }
};
// Using filter method is an overkill here. This is bcz we don't need to return an array here. We just need a count for numbers >= 100.

console.log(count);