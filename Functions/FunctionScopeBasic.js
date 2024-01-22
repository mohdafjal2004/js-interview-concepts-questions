//Function scope

//All three variables and multiply() function are in global scope
var num1 = 20;
num2 = 5;
name = "Mohd Afjal";

function multiply() {
  return num1 * num2;
}
multiply(); //Output = 100

//A nested function example
function getScore() {
  var num1 = 2; //Here we are shadowing the global varibales
  var num2 = 3; //Here we are shadowing the global varibales

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}
console.log(getScore()); //Mohd Afjal scored 5

//* Output Based Example in Function scope

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
//Output for let = 0 1 2 3 4 5 <= Becoz let is block-scoped

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

//Output of var =  5 5 5 5 5 <= Becoz var has not block-scoped
