//Closure scope chaining :- Means the closure( from local scope) has access
//to outer function scope and out of the outer function scope called
//global scope

// Ex-1 of Closure scope chaining
var e = 10;//Global scope variable
function sum(a) {
  return function (b) {
    return function (c) {
      // Outer scope function
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4));//20
