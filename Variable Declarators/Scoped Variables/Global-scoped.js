//Here we are declare variable globally
//and then accessing it inside other block, function and globally

const x = 1;
let y = 2;
var z = 3;

//So any variables declared globally using "let", "var" and "const" can
// 𝗯𝗲 𝗮𝗰𝗰𝗲𝘀𝘀𝗲𝗱 𝗴𝗹𝗼𝗯𝗮𝗹𝗹𝘆
// console.log(x);
// console.log(y);
// console.log(z);

//So any function declared globally can 𝗯𝗲 𝗮𝗰𝗰𝗲𝘀𝘀𝗲𝗱 𝗴𝗹𝗼b𝗮𝗹𝗹𝘆 , 𝗶𝗻𝘀𝗶𝗱𝗲 𝗮 𝗯𝗹𝗼𝗰𝗸 𝘀𝗰𝗼𝗽𝗲 𝗼𝗿 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝘀𝗰𝗼𝗽𝗲
function smth() {
  console.log("I am inside a function");
  // console.log(x);
  // console.log(y);
  // console.log(z);
}

//So any variables declared  using "let", "var" and "const" or a function created globally can
// 𝗯𝗲 𝗮𝗰𝗰𝗲𝘀𝘀𝗲𝗱 𝗶𝗻𝘀𝗶𝗱𝗲 𝗮 𝗯𝗹𝗼𝗰𝗸
if (true) {
  console.log("I am inside a block");
  //   console.log(x);
  //   console.log(y);
  //   console.log(z);
  smth();
}

// 𝗔𝗰𝗰𝗲𝘀𝘀𝗶𝗻𝗴 𝗮 𝗴𝗹𝗼𝗯𝗮𝗹 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗶𝗻𝘀𝗶𝗱𝗲 𝗮𝗻𝗼𝘁𝗵𝗲𝗿 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻
function smth2() {
  console.log("I am inside another function");
  smth();
  // console.log(x);
  // console.log(y);
  // console.log(z);
}
smth2();
