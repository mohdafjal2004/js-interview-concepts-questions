//var hoisting

console.log(count);
var count = 1;
//This above code won't give any error
//but will give undefined, becoz

//Internally above code looks like
//Declaration part of the expression(declaring and initializing a variable) moves to the top
var a;

//The it logs the variable
console.log(a);

//Then it sees that variable is then initialized(assigned)
a = 1;
