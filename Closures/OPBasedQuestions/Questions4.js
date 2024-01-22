// * Q-8 : Implement Caching/Memoize function

//We need to memoize this function, so we pass this function as argument
//to the function which will memoize this function
const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 10005656500; i++) {
    return num1 * num2;
  }
};

console.time("First Call");
console.log(clumsyProduct(8279, 87792));
console.timeEnd("First Call");

console.time("Second Call");
console.log(clumsyProduct(8279, 87792));
console.timeEnd("Second Call");

// Memoize function
function myMemoize(fn, context) {
  //fn is the function which will be memoized
  const res = {};
  //This object will store the previously executed function with same arguments

  return function (...args) {
    var argsCache = JSON.stringify(args); //Converting all arguments as string
    if (!res[argsCache]) {
      // Calculate the function result

      res[argsCache] = fn.call(context || this, ...args);
    }
    // Simply return previous result of the same argument in function
    return res[argsCache];
  };
}

const memoizedClumsyProduct = myMemoize(clumsyProduct);
console.time("First Call");
console.log(memoizedClumsyProduct(8279, 87792));
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizedClumsyProduct(8279, 87792));
console.timeEnd("Second Call");

// * Q-9:  Difference between Closure and Scope

//A function created within another function is closure, this closure is
// usually returned, so we can use outer function variable at later time
// to access this closure
// Closure has 3 scopes - Global, outer function and local scope

// Scope in javascript defined what variable you have access to
// Scope is of 2 types - local and global
