let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// It outputs [1, 4, 3] because array item with index 1 is mutated at line 3. 
// Since variable array2 is still pointing/referencing at the same array in program memory/heap, it will display the said output.

// Refer to LS solution for more info