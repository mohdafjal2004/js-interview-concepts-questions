// * Q1 - sum(2)(6)(1)

// Standard function
function sum1(a, b, c) {
  return a + b + c;
}

console.log(sum1(2, 6, 1));

// Currying function
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1));

// * Q2 - Create a currying function for
/* 
evaluate("sum")(4)(2) = 6
evaluate("multiply")(4)(2) = 8
evaluate("divide")(4)(2) = 2
evaluate("substract")(4)(2) = 2
*/

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation";
    };
  };
}

// Method-1 of calling evaluate() method
console.log(evaluate("sum")(4)(2)); //6
console.log(evaluate("multiply")(4)(2)); //8
console.log(evaluate("divide")(4)(2)); //2
console.log(evaluate("substract")(4)(2)); //2

// Method-2 of calling evaluate() method
// In this way we call the closure again and again using currying
// with different arguments
const mul = evaluate("multiply");
console.log(mul(3)(5));
