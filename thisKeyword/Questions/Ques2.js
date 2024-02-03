// *Q-4:  What's the output?
const user = {
  name: "Afjal",
  greet() {
    return `Hello ${this.name}`;
  },
  farewell: () => {
    return `GoodBye ${this.name}`;
  },
};
console.log(user.greet()); //Hello Afjal
console.log(user.farewell()); //GoodBye undefined
// "this" in Regular function  targets the property which is just outer
//so "this" in Arrow function always points to global scope property

//* Q-5 : Create an Object calculator
// let calculator = {
//   read() {},
//   sum() {},
//   mul() {},
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//Solution
let calculator = {
  read() {
    this.a = Number(prompt("Here a =", 0));
    this.b = Number(prompt("Here b =", 0));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// * Q-6 : What will be the output?
var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    //Here this "method" method will target the just outer parent
    //object's variable which is "object"

    //But when "callback" function is passed as argument, and this
    //callback function is targeting the global object, so it will
    //print 4 not 5
    //And the concept of shadowing not works inside the object
    fn();
    //Fixing the above function => //* f.bind(this)()
  },
};
object.method(callback);

//Follow up question after changing the object
var object2 = {
  length: 5,
  method() {
      arguments[0]();
      //parameters = [callback,2,`3]
    //"arguments" take all the parameters received into its parent 
    //function as an array, in which 1st element is callback function
    //and from 2nd element arguments are set
  },
};
object2.method(callback, 2, 3);
