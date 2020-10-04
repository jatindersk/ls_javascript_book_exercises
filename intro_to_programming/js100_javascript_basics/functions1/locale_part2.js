// let extractRegion = locale => locale.split('_' , '.')[1]; // Failed attempt. split method doesn not expect second split argument instead it's an optional limit

let extractRegion = locale => locale.split('')[3] + locale.split('')[4];  // other "Possible" way to use split method

// let extractRegion = locale => locale.substring(3, 5);

// LS Solution (ingenius!)
function extractRegion(locale) {
  return locale.split('.')[0].split('_')[1];
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'