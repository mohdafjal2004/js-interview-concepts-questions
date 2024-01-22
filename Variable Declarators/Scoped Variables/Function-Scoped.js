//Here we are declaring variable inside a function(smth())
//and then accessing it inside other block, function and globally

//function-scope: Any variable declared  or a function created inside it,
// can't be accessed outside
const smth = () => {
  console.log("I am inside the function smth");
  const x = 1;
  let y = 2;
  var z = 3;
  function smth2() {
    console.log("I am inside function smth2()");
  }
};
smth();

//So all items created inside the function 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝗮𝗰𝗰𝗲𝘀𝘀𝗲𝗱 𝗴𝗹𝗼𝗯𝗮𝗹𝗹𝘆

//   console.log(x);
//   console.log(y);
//   console.log(z)
// console.log(smth2());

//All items created inside the function 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝗮𝗰𝗰𝗲𝘀𝘀𝗲𝗱 𝗶𝗻𝘀𝗶𝗱𝗲 𝗮𝗻𝗼𝘁𝗵𝗲𝗿 𝗯𝗹𝗼𝗰𝗸
//
if (true) {
  //   console.log(x);
  //   console.log(y);
  //   console.log(z);
  // console.log(smth2());
  console.log("I am block");
}

//So all items created inside  the function 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝗮𝗰𝗰𝗲𝘀𝘀𝗲𝗱 𝗶𝗻𝘀𝗶𝗱𝗲 𝗮𝗻𝗼𝘁𝗵𝗲𝗿 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻
const smth3 = () => {
  // console.log(x);
  // console.log(y);
  // console.log(z);
  // console.log(smth2());

  console.log("I am function");
};
smth3();
