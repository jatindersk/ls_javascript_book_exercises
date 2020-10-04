let extractLanguage = loc => loc.split('_')[0];
let extractRegion = locale => locale.split('')[3] + locale.split('')[4];
let greet = (languagecode, region) => {
  switch (languagecode) {
    case 'en':
      if (region === 'US') return 'Hey!';
      else if (region === 'GB') return 'Hello!';
      else return 'Howdy!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
};

let localGreet = locale => {
  let lang = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (lang) {
    case 'en': return greet(lang, region);
      // if (region === 'US') return 'Hey!';
      // else if (region === 'GB') return 'Hello!';
      // else return 'Howdy!';
    case 'fr': return greet(lang);
    case 'pt': return greet(lang);
  };

};

// LS Solution
function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
};

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('pt_AO.UTF-8')); // 'Olá!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

