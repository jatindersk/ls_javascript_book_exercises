// let initGame = function () {
//   return {
//     level: 1,
//     score: 0
//   }
// };

// LS Solution: Unique thing in this the inclusion of parentheses around the returned object
// The reason to do so is that JS engine does not interpret a statement staring with a brace as an object, but as a block statement.
// The easiest way to do so w/o changing the meaning or behaviour of the statement is by adding parentheses.

let initGame = () => ({
  level: 1,
  score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
