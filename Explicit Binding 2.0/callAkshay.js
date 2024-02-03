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

//Call means function borrowing: Without copying the entire function
// from name object to name2 object, we use call and it is will
//point the "this" keyword of function to the name2 object
//call allows you to control the context of a function,
// even if it's not directly bound to an object.
// ⁡⁣⁣⁢𝗰𝗮𝗹𝗹 𝗱𝗼𝗲𝘀𝗻'𝘁 𝗰𝗿𝗲𝗮𝘁𝗲 𝗮 𝗻𝗲𝘄 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻; ⁡
//⁡⁣⁣⁢𝗶𝘁 𝗼𝗻𝗹𝘆 𝗰𝗵𝗮𝗻𝗴𝗲𝘀 𝘁𝗵𝗲 "𝘁𝗵𝗶𝘀" 𝘃𝗮𝗹𝘂𝗲 𝗳𝗼𝗿 𝗮 ⁡⁢⁣⁢𝘀𝗶𝗻𝗴𝗹𝗲 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗰𝗮𝗹𝗹⁡.⁡
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

printFullName.call(name2, "Nawalgarh","Jhunjhunu");
printFullName.apply(name2, ["Nawalgarh", "Rajasthan"]);
//Use apply for a similar purpose as call method,
// but apply method accepts arguments as an array.
