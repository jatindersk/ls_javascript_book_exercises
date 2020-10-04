// LS Solution // Had difficulty understanding lang code implementation, thought there will be a built in method which implements the langcode feature

let greet = (languagecode) => {
  switch (languagecode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
};

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'