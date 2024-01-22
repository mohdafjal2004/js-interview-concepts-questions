//This file is for simple variable shadowing

// 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲-𝗦𝗵𝗮𝗱𝗼𝘄𝗶𝗻𝗴: After declaring a variable,
// we re-declare it inside the nested block-scope

//? Remember all of the shadowing concept of "𝗹𝗲𝘁" are same applied to "𝗰𝗼𝗻𝘀𝘁"  variable also

//Shadowing the global variable
let a = "Global Varibale";
//Inside block
{
  let a = "Shadowed block Variable ";
  console.log(a, "inside block scope");
}
//Inside function
function smth() {
  let a = "Shadowed function Variable";
  console.log(a, "inside function scope");
}
smth();

//Shadowing a block-scoped variable inside the block
{
  let a = 10;
  {
    let a = 20;
    console.log(a);
  }
  console.log(a);
}

//Shadowing the function-scoped variable inside the function
const test = () => {
  let a = 10; //Original variable
  if (true) {
    let a = 20; //Shadowing the variable(re-declaring inside the nested block-scope)
    console.log(a);
  }
  console.log(a); //Original variable
};
// test();
