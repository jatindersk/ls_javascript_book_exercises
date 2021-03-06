let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// False.

// LS explanation
// Primitives, like strings or numbers, are compared by their value. For example, the two strings below are strictly equal:
// Arrays, however, are objects and not primitives. JavaScript compares whether two objects are strictly equal by checking whether they are the same object, 
// i.e. whether they reference the same location in memory. Since we constructed two array objects, one on line 1 and one on line 2, they don't have the same reference.

