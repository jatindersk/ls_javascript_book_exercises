let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// let keys = Object.keys(obj);
// keys.forEach(str => console.log(str.toUpperCase()));

// Refactored code
Object.keys(obj).forEach(el => console.log(el.toUpperCase()));
console.log(obj);