// * Q3 - Infinite Currying -> sum(1)(2)(3).........(n)

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    // It checks whether we have any value of "b"
    // if it has the value of "b" then it add a + b
    // and again call the function "a" which will repeat the function
    return a;
  };
}
console.log(
  add(5)(2)(2)(1)(9)(78)(32)(23)(5)(2)(2)(1)(9)(78)(32)(23)(67)(2)(1)()
);

// * Q-4 Currying vs Partial Application

//Curyying : Returing the number of functions same as the number of argument

// But Here in below example,we have 1 return function with 2 arguments
//this is Partial Application

// Partial Application
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}
console.log(sum(20)(1, 4));
