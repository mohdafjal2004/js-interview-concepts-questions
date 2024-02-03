// * Q-7 : Bound Function
function f() {
  console.log("this: ", this);
  // In context to f(), "null" is provided in "bind()"
  // so it returns an empty result
}

let user = {
  g: f.bind(null),

  //Here as usual this bind() returns a 𝗻𝗲𝘄 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻(copy of f()) as
  //result with context of null, and this copy function is permanently
  // bound to null

  //The newly returned function is assigned to user.g:
  //The result of f.bind(null)
  //is stored in the g property of the user object.
};

user.g();

// * Q-8 : Bind Chaining
function func() {
  console.log(this.name);
}

const retfun = func.bind({ name: "Afjal" }).bind({ name: "Sonu" });
retfun();
//Remember once a function is bind to an object, it will be set permanently
//so if we chain another bind() with an object, it will still show
//previosly binded result, so bind() chaining doesn't exist

//Subsequent calling bind method doesnot override the previos binding with the specified value/

// * Q-9 :Fix the line 52 to make code work properly
//Function to check whether password is correct or not
function checkPassword(success, failed) {
  let password = prompt("Password ? ");
  if (password == "AfjalKhan786") success();
  else failed();
  //How success become a method, becoz bind method returns a new function
}

let userName = {
  name: "Mohd Afjal",
  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} failed to logged in`);
  },
};
// checkPassword(userName.loginSuccessful, userName.loginFailed);
//Here while calling the "loginSuccessful" and "loginFailed" method
//both these methods are passed as arguments ⁡⁣⁣⁢𝗮𝗻𝗱 𝘄𝗲 𝗮𝗿𝗲 𝗼𝗻𝗹𝘆 𝗽𝗮𝘀𝘀𝗶𝗻𝗴
//𝘁𝗵𝗲 𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗼𝗳 𝘁𝗵𝗲𝘀𝗲 𝗺𝗲𝘁𝗵𝗼𝗱𝘀, 𝘀𝗼 𝘁𝗵𝗲𝘀𝗲 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 𝗹𝗼𝘀𝗲 𝘁𝗵𝗲𝗶𝗿 𝗼𝗿𝗶𝗴𝗶𝗻𝗮𝗹
//𝗰𝗼𝗻𝘁𝗲𝘅𝘁("𝘁𝗵𝗶𝘀")⁡

checkPassword(
  userName.loginSuccessful.bind(userName),
  userName.loginFailed.bind(userName)
);
//Here we are explicitly setting the context(this) to these methods

//Why we used bind in Q-9 while calling the checkPassword()?
//becoz bind() returns a new function so when checkPassword() is defined
//so it takes "success" and "failed" which are functions, so to returns
//functions which bind() instead of the explicit object binding
