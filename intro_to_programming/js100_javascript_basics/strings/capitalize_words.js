let text = 'launch school tech & talk';
let words = text.split(' ');
let capitalizedWords = [];

for (let i = 0; i <= words.length; i += 1) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
};

console.log(capitalizedWords.join(' '));
