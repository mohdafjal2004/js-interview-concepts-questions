// Output Based Questions of Closures Part-2
// * Q4 : Block scope and settlement : ⁡⁢⁣⁢Important⁡
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); //What is logged? 3 3 3
  }, 1000);
}

// loop will run quickly and the ⁡⁢⁣⁢last single value⁡ after loop ending was 3,
// Since setTimeOut() will run after 1 second, so it takes 3 as input
//  and after every 1 second it prints 3 for 3 times like : 3 3 3

// {
//   𝗶 = 𝟬 / 𝟭 / 𝟮 / 3(here loop gets terminated); 
// So when time gets finished of delay, it sees the 3 as input
//
// }

//! Why single value
//since "var" variables in for-loop don't create a new variable
// for each iteration of the loop,so the same variable is
//is shared to all the iterations
// so if a change is made in any particular iteration to that single variable
// all iterations will get updated with that change

// ? So to solve this we can use let
for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); //What is logged? 0 1 2
  }, 1000);
}

//Here also the loop will run quickly, but in case of "let" in loop
//it creates a new variable with its own scope for each iteration
//so any changes made to this variable will remain in the scope
//becoz variable in each scope is "let", so the changes will
//remain within the scope becoz "let" is block scoped

//So "let" don't create a single variable, it creates a new variable for
//each iteration and any changes to that variable will remain
// to its own scope, so it generates output 0 1 2

//Using "let" , it creates a new variable like this
//with its own scope

// {
//   𝗶 = 𝟬; //𝗙𝗶𝗿𝘀𝘁 𝘁𝗵𝗶𝘀 𝘄𝗶𝗹𝗹 𝗯𝗲 𝗽𝗶𝗰𝗸𝗲𝗱 𝘂𝗽, 𝗮𝗻𝗱 𝘁𝗵𝗲𝗻 𝗽𝗿𝗶𝗻𝘁𝗲𝗱 𝗮𝗳𝘁𝗲𝗿 𝟭𝘀
// }
// {
//   𝗶 = 𝟭; //𝘁𝗵𝗲𝗻 𝘁𝗵𝗶𝘀 𝘄𝗶𝗹𝗹 𝗯𝗲 𝗽𝗶𝗰𝗸𝗲𝗱 𝘂𝗽, 𝗮𝗻𝗱 𝘁𝗵𝗲𝗻 𝗽𝗿𝗶𝗻𝘁𝗲𝗱 𝗮𝗳𝘁𝗲𝗿 𝟭𝘀
// }
// {
//   𝗶 = 𝟮; //𝘁𝗵𝗲𝗻 𝘁𝗵𝗶𝘀 𝘄𝗶𝗹𝗹 𝗯𝗲 𝗽𝗶𝗰𝗸𝗲𝗱 𝘂𝗽, 𝗮𝗻𝗱 𝘁𝗵𝗲𝗻 𝗽𝗿𝗶𝗻𝘁𝗲𝗱 𝗮𝗳𝘁𝗲𝗿 𝟭𝘀
// }

// * Suppose we are asked to print 0 1 2 using "var"
// Using closure we can do that, the problem is that "var" is function-scoped and it can not handled by block scope
// of for-loop statement so we need a function which can trap each iteration value which is closure function

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i); //What is logged? 0 1 2
    }, 1000);
  }
  inner(i);
}

// Since "var" is function scoped so for each iteration of value of "var" variable is trapped inisde the closure function
// So each value of iteration as 0 , 1 , 2 is trapped and printed as output
// So every time this loop run, it will create a whole new memory
// space for function
