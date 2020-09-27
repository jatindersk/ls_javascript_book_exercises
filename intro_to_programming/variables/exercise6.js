const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// No this will not give an error. This will give an output of bar. This is because, outside of curly braces the scope of newly declared FOO ends and thus the variable FOO declared with 
// a const keyword in line 1 comes back into the scope and gets printed/logges on the console.