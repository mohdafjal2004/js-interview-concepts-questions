//Here we will see 𝗛𝗼𝗶𝘀𝘁𝗶𝗻𝗴 in Function

//Simple funciton creating and calling
function fxnName() {
  console.log("Mohd Afjal");
}
fxnName();

//Hoisting: But if we first call then function and then declare it
//Still It will run properly becoz function are hoisted completely
fxn2Name();

function fxn2Name() {
  console.log("Mohd Afjal Hoisting");
}

//Hositing in varibale
// console.log(x); //Undefined
// var x = 5;

//Output Based Question of Hoisting in function
var x = 21;
var fun = function () {
  console.log(x);
  var x = 20;
};
fun();
//𝗨𝗻𝗱𝗲𝗳𝗶𝗻𝗲𝗱 becoz when we have a variable in local scope but currently in the "Temporal dead zone" during logging

//⁡⁢⁣⁢𝗹𝗲𝘅𝗶𝗰𝗮𝗹 𝘀𝗰𝗼𝗽𝗶𝗻𝗴⁡ : Here lexical scoping is working
//When a variable is logged inside the function then  first it will look inside the local scope if not found
// then looks in the outer scope and then in the global scope
