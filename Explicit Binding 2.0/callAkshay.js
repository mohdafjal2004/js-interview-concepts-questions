let name = {
  firstname: "Mohd",
  lastname: "Afjal",
  printFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};
name.printFullName();

let name2 = {
  firstname: "Sachin",
  lastname: "Tendulkar",
};

//Call means function borrowing: Without simply copying the entire function
// from name object to name2 object, we use call and it is will
//point the "this" keyword of function to the name2 object
name.printFullName.call(name2);

//Suppose if the function is outside of any object and now we want
//to borrow the function inside a object, also use the
// "this" keyword of function then we directly use the call()
//method on the function
function printFullName(hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + state
  );
}

printFullName.call(name2, "Nawalgarh");
printFullName.apply(name2, ["Nawalgarh", "Rajasthan"]);
