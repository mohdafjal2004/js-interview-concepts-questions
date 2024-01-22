//! Using "this" keyword in Class and constructor

class user {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}

const User = new user("Afjal");
console.log(User);
User.getName()
