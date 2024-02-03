// Creating a basic object

const user = {
  name: "Mohd Afjal",
  age: 23,
  //invalid properties becoz it contains spaces
  "like the video": true,
  print: () => {
    console.log("THis is name");
  },
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


//delete Object Method
delete user.print()
console.log(user)

//? Remember the delete keyword can only delete the
//? properties of an object, it can't delete a variables or the functions in local scope

// * 𝗦𝗶𝗺𝗽𝗹𝗲 𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻
const func = (function (a) {
  delete a; //So this delete won't delete "a", becoz it is local variable
  return a;
})(5);
console.log(5); //5

//Dynamically adding the varibales as properties
let firstName = "Mohd Afjal";
let secName = "Sonu";

var myName = {
  firstName: secName,
};
console.log(myName);

//Symbol a primitive datatype, for creating unique values
const mySymbol = Symbol(45);
console.log(mySymbol);
