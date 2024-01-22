// Basic Currying : Breaking a function with multiple arguments into
// a series of function each with an argument at a time

// Example of f(a,b) into f(a)(b)

// Standard function
function f(a, b) {
  return a + b;
}

console.log(f(3, 5));

// Now after currying
function f2(a) {
  return function (b) {
    console.log(a + b);
    //Since return is used above in the function, so it will be unreachable
    //when return is again here
  };
}
f2(3)(4);
