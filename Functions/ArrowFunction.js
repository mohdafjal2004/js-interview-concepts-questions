//Arrow function

//Implicit Arrow function: Directly defining a function
// without any curly braces{} and without any return keyword
const add = (firstNum, secondNum) => firstNum + secondNum;
console.log(add(2, 4));

//Explicit Arrow function : Explicitly defining the function
// using curly braces with the help of return keyword
const add2 = (firstNum, secondNum) => {
  return firstNum + secondNum;
};
console.log(add2(5, 6));

//Difference between Arrow function and Regular function

//⁡⁢⁣⁢1⁡-Syntax

// Regular function
function square1(num) {
  return num * num;
}
console.log(square1(6));

// Arrow function
const square2 = (num) => {
  return num * num;
};
console.log(square2(6));

// ⁡⁢⁣⁢2⁡- 𝗮𝗿𝗴𝘂𝗺𝗲𝗻𝘁𝘀 keyword in Regular function works perfectly fine
function fn() {
  console.log(arguments);
}
fn(1, 3, 2);

// 𝗮𝗿𝗴𝘂𝗺𝗲𝗻𝘁𝘀 keyword in arrow function gives error
const fn2 = () => {
  console.log(arguments);
};
// fn2(); //It won't gives desired output

// ⁡⁢⁣⁢3⁡ - "this" keyword don't work in arrow function but works completely fine in regualar function
let user = {
  username: "Mohd Afjal",

  rc1: () => {
    console.log("Whatsup rc1" + this.username);
  },
  //  Here arrow function is  not technically a method of the object.
  // It's still a standalone function defined in the global scope,
  // just visually nested within the object literal's curly braces.

  //Because rc1 is defined in the global scope,
  // its this value will inherit from the global scope,
  // which typically refers to the global object {}

  rc2() {
    console.log("Whatsup rc2" + this.username);
  },
};
user.rc1();

user.rc2();

// this in function
// function chai() {
//   const username = "Afjal";
//   console.log(this.username);
  //undefined becoz here "this" is empty object
// }

const chai = () => {
  // const username = "Afjal";
  console.log(this.username);
  console.log(this);
  //undefined becoz here "this" is empty object
};
chai();
