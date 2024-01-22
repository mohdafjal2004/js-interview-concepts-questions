//* Q-5: How would you use a closure to create a private counter?
function counter() {
  var counter = 0;
  function add(increment) {
    //Closure function
    counter += increment;
  }

  //Another Closure function
  function retrieve() {
    return "Counter = " + counter;
  }

  //   Returning the closure function as output of the outer function
  //which is counter()
  return {
    add,
    retrieve,
  };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrieve());

// * Q -6 : What is Module Pattern?
//It is a design pattern of code to encapsulate variables and function
//In Module, private members cannot be accessed from outside the function
//but public members can be accessed from outside the function

//But public members can access private members within the module
//if we want to not directly give access to a private members, indirectly

//we can access them by accessing public members
//which can access private members

//In this we declare a IIFE function to a variable,which follows
//this design pattern of Module Pattern

var Module = (function () {
  function privateMethod() {
    console.log("private");
  }
  function publicMethod() {
    console.log("public");
  }

  return {
    publicMethod,
  };
})();

Module.publicMethod();

//* Q-7 : Make this run only once, but it should show output mulitple times

let view;
function JustDoIt() {
  view = "Mohd Afjal";
  console.log("Welcome", view);
}
JustDoIt();
JustDoIt();
JustDoIt();
JustDoIt();
JustDoIt();

// 𝗦𝗼𝗹𝘂𝘁𝗶𝗼𝗻 - 𝟭 : Using if-else
let view2;
function JustDoIt2() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already Won this world");
    } else {
      view = "Sonu";
      console.log("Welcome", view);
      called++;
    }
  };
}

let Happy = JustDoIt2();
Happy();
Happy();
Happy();
Happy();
Happy();

// 𝗦𝗼𝗹𝘂𝘁𝗶𝗼𝗻 - 𝟮 : Using Poylfills
function once(func, context) {
  let ran;

  return function () {
    //closure
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}
const hello = once(() => console.log("Hello"));
hello();
hello();
hello();
hello();
