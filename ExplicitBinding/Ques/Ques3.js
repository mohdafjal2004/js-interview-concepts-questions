// * Q-7 : Bound Function
function f() {
  console.log(this);
  // In context to f(), "null" is provided in "bind()"
  // so it returns an empty result
}

let user = {
  g: f.bind(null), //Here as usual this bind() returns a new function as
  //result with context of null, and f is permanently bind to null
};

user.g();

// * Q-8 : Bind Chaining
function f() {
  console.log(this.name);
}

f = f.bind({ name: "Afjal" }).bind({ name: "Sonu" });
f();
//Remember once a function is bind to an object, it will be set permanently
//so if we chain another bind() with an object, it will still show
//previosly binded result, so bind() doesn't exist

// * Q-9 :Fix the line 42 to make code work properly
function checkPassword(success, failed) {
  let password = prompt("Password ? ");
  if (password == "AfjalKhan786") success();
  else failed();
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
checkPassword(
  userName.loginSuccessful.bind(userName),
  userName.loginFailed.bind(userName)
);

//Why we used bind in Q-9 while calling the checkPassword()? 
//becoz bind() returns a new function so when checkPassword() is defined
//so it takes "success" and "failed" which are functions, so to returns
//functions which bind() instead of the explicit object binding