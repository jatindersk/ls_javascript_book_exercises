let first = arr => arr[0];

// incase of an empty array, we will get undefined

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(first([])); // undefined