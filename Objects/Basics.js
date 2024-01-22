// Creating a basic object

const user = {
  name: "Mohd Afjal",
  age: 23,
  //invalid properties becoz it contains spaces
  "like the video": true,
};

// Aceessing object properties(valid)
console.log(user.name);

// Aceessing object properties(invalid)
console.log(user["like the video"]);

// Modifying object properties(valid)
user.name = "Sonu";
console.log(user);

// Delete Object properties(valid)
delete user.age;
console.log(user);

//delete Object properties(invalid)
delete user["like the video"];
console.log(user);

//? Remember the delete keyword can only delete the
//? properties of an object, it can't delete a variables or the functions in local scope

// * 𝗦𝗶𝗺𝗽𝗹𝗲 𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻
const func = (function (a) {
  delete a; //So this delete won't delete "a", becoz it is local variable
  return a;
})(5);
console.log(5); //5

//Dynamically adding the varibales as properties
let firstName = "Mohd";
let secName = "Afjal";
var myName = {
  [firstName]: secName,
};
console.log(myName);
