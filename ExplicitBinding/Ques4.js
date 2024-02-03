// * Q- 10 : Partial Application for login function
// Follow up question of Q-9

function checkPassword(ok, fail) {
  let password = prompt("Password ? ");
  if (password == "Afjal786") ok();
  else fail();
}
let user = {
  name: "Afjal ",

  login(result) {
    console.log(this.name + (result ? "login successful " : "login failed "));
  },
};
// checkPassword(?,?)

// Solution
// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

// * Q- 11 : Explicit Binding with Arrow function
const age = 10;
var person = {
  name: "Afjal",
  age: 23,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = { age: 24 };
person.getAgeArrow.call(person2);//Explict binding don't work on arrow fxn
person.getAge.call(person2);//24
