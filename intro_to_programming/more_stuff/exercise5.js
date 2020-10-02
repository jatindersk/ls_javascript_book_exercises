function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// For example, if argument string = 'Jatinder Singh'
// Then this function will return [5, 8]

// LS explanation
// This code converts a string into an array of words, reverses that array, and then returns a new array that contains the lengths of the words.
// It assumes that a single space character delimits the words in the original string.