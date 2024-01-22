//Here we  declare variable inside the block-scope
//and then accessing it inside other block, function and globally

//Variable declared using "let" and "const" inside the block-scope
//⁡⁢⁣⁢cannot⁡ be accessed outside that block-scope, but "var" variables and
//function declared inside the block scope are
// considered as global entity in this case,
// so they can easily be accessed in all scopes

//Block-scope
if (true) {
  const x = 1;
  let y = 2;
  var z = 3;
  function hello() {
    console.log("I am function");
  }
  console.log("I am inside the declaring block scope", x, y, z);
}

//Accessing the global variable "var" (which is also declared inside a block) and function globally
console.log("z is global", z);
hello();

//Accessing the global variable "var" (which is also declared inside a block) and function
//inside the other block
{
  hello();
  console.log("z is inside this block", z);
}

//Accessing the global variable( declared in block)
//and function inside the function
const smth = () => {
  console.log(" z is inside this function ", z);
  hello();
};
smth();
