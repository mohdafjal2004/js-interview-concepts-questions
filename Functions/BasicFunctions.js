// 1. 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗗𝗲𝗰𝗹𝗮𝗿𝗮𝘁𝗶𝗼𝗻 : Simple function Creation
function square1(num) {
  return num * num;
}
console.log(square1(6));

//2. 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻 : Function(with no name) stored inside a variable
//The name of the variable will be the name of function in this case
//But if we don't consider the name of variable in this case,
// then the function part is anonymous
const square2 = function (num) {
  return num * num;
};
console.log(square2(5));

//3. 𝗙𝗶𝗿𝘀𝘁 𝗰𝗹𝗮𝘀𝘀 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀: In JS, functions can also be treated as variable,
//and the way a variable is used , same way a function can also be declared,
// used and then returned. In this a function can be passed into another function
//can be used, manipulated and returned from those functions

function square3(num) {
  return num * num;
}

//Passing a function into another function as variable
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}

displaySquare(square3);

//4. 𝗜𝗜𝗙𝗘 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀: Immediately Invoked Function Expression
// Simply calling the function while creating it
// In this case, we don't separately create a function and then call it

(function square4(num) {
  console.log(num * num);
})(5);

//* Ex of IIFE - Output Based Question
(function (x) {
  return (function (y) {
    console.log(x);
    console.log(y);
  })(2);
})(1);
