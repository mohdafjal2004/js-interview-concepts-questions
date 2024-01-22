// * Q-12 : Polyfill Methods

let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(`I have purchased ${this.color} - ${this.company} car 
    for ${currency}${price}`);
}

//In-built call() Method
// purchaseCar.call(car1, "$", 1000000);

//* Polyfill for call method
Function.prototype.myCall = function (context = {}, ...args) {
  // edge-case
  if (typeof this !== "function") {
    throw new Error(this + "It is not Callable");
  }

  context.fn = this;
  //Here "this" means "myCall", so we are just storing "this" in a
  //   a new property called "fn" on the "context" onject

  context.fn(...args);
  //"this"/myCall function stored in "fn" property on the "context" object
  //is called,passing any argument(if any) that were provided
};
purchaseCar.myCall(car1, "$", 1000000);
//" ...args" used in parameters becoz we don't know number of arguments

// * Polyfill for apply() method
Function.prototype.myApply = function (context = {}, argsArray = []) {
  // edge-case for checking whether myCall is function
  if (typeof this !== "function") {
    throw new Error(this + "It is not Callable");
  }

  // Edge-case for checking whether the arguments provided are array or not
  if (!Array.isArray(argsArray)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...argsArray);
};
purchaseCar.myApply(car1, ["$", 1000000]);

// * In-built bind() method
const Func = purchaseCar.bind(car1, "$", 10000);
Func();

// * Polyfill for bind() method
Function.prototype.myBind = function (context = {}, ...args) {
  // edge-case for checking whether myCall is function
  if (typeof this !== "function") {
    throw new Error(this + "It is not Callable");
  }

  context.fn = this;

  //Bind() method by-default returns a new function which is stored inside
  //the variable and can be used later on, so first creating that
  //returning function, which is also taking the arguments myArgs
  //myArgs are arguments which are passed into the variable in 
  //which the returning function is stored
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const Func2 = purchaseCar.bind(car1, "$", 10000);
Func();//if any argument is provided in this, then inside polyfill we
//consider it as myArgs 
