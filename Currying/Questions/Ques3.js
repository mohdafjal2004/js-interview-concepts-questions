// * Q5:-  DOM Manipulation using Currying
function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("heading");
// updateHeader("Hello Mohd Afjal");

// * Q-6 curry() implementation !⁡⁢⁣⁢Important⁡
// Converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const totalSum = curry(sum);
console.log(totalSum(1)(2)(3));
