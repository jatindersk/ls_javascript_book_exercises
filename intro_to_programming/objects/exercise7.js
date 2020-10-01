let objToCopy = {
  foo: 1,
  bar: 2,
};

let copyObj = (orgObject, keys) => {
  let dupObject = {};

  if(keys) {
    keys.forEach(el => {
      dupObject[el] = orgObject[el];
    });
  
  return dupObject;
  }
  else {
    return Object.assign(dupObject, orgObject);
  }
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined