//Lexical Closures : A function which is defined inside another function
//and this inner function has access to variables of outer fucntion
//but opposite is not true

// Ex-1
var username = "Sonu";
function global() {
  var name = "Mohd Afjal"; //Outer Scope  variable

  return function local(num) {
    console.log(name, num, username); //Inner Scope  variable
  };
}


const getData = global()
getData(10)
//Here local() function is closure

//here local() function is closure becoz it is defined inside
// another function called global(), and local() has access to outer scope
//variable which is from global() but reverse is not true

global()(5);
//In global()() ,  global() is used for handling outer function(base function)
//and another () is used for handling calling return function(closure function called local()) of global function

// * Remember a closure has 3 scopes -
//1. local scope
//2. outer function scope and
//3. global scope

