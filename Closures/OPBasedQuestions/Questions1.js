// Output Based Questions of Closures

//* Q1 : What will be logged to console?

let count = 0; //Global Variable
(function printCount() {
  if (count === 0) {
    let count = 1; //Shadowing the global variable
    console.log(count);
  }
  console.log(count); //Outside the if statement count is still zero
})();

// * Q2 : Write a function that would allow you to do this
// var addSix = createBase(6);
// addSix(10); //returns 16
// addSix(21); //returns 16

function createBase(num) {
  return function (innerNum) {
    return innerNum + num;
  };
}
const addFive = createBase(5);
console.log(addFive(10));
console.log(addFive(40));

//Another way of calling the createBase() function and its closure
//* console.log(createBase(6)(10));

//In above new method : createBase(6) calls the createBase() function which
//is outer function
//and another () is used for handling the return function 0f createBase(6)
//which is itself a closure function (inner function)

//* Q3 : Time Optimization  of below code
//* Becoz every time find() function is called with bigger value,
// * more time is required to execute the function so we need
//* to reduce the time required in this case

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   console.log(a[index]);
// }
// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd('"12');

//* Solution for time optimization
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(50);
console.timeEnd("12");
