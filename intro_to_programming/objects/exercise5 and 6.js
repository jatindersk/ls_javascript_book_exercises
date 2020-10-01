let myProtoObj = {foo: 1, bar: 2,};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;
console.log(myObj);

// Snippet 1:
Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

// Snippet 2:
for (let key in myObj) {
  console.log(key);
}

// The two code snippets will not produce the same output because the for/in loop iterates over the prototype object's properties as well ...
// ... whereas, the keys operation returns an array containing keys of own object only.
