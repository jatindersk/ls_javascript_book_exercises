function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// It doesn't logs anything because log method is invoked after the return statement. Thereby, ending the function's execution from the call stack.