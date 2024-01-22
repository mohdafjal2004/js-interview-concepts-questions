//Hitsh Choudhary
//Constructor function
function SetUsername(username) {
  //Complete DB calls
  this.username = username;
  console.log("Called");
}

//Constructor function
function createUser(username, email, password) {
  //   SetUsername(username); //It won't work becoz here SetUsername()  is called
  //but not getting its internal value

  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
