$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)

    // It tell us the type of exception/ error occured i.e ReferenceError. Further, it tell us that error was caused upon invoking/calling the function hello at line 4 and column 15.
    // Also, it tell us that error occured at line 13, column 1 in the global scope of the program.

    // LS Solution:
    
    // An error occurred in the exercise2.js program on line 4 of the program; a ^ points to where JavaScript thinks the error is in the code: 
    // it's pointing to the argument list for console.log.
    // More specifically, line 6 in the output tells you that a ReferenceError exception occurred and that the name greeting isn't defined. Line 7 repeats some earlier information: JavaScript detected the error at column 15 of line 4, but it also tells you that the code is in the hello function. 
    // Line 8 tells you that hello was called from line 13 in an anonymous function, namely the global-level of the program.
    // The rest of the output comes from running the code in node and probably isn't useful to you as an application programmer.