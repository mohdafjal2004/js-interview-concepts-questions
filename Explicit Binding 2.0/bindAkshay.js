//Bind method will just create a copy of the function and will bind to the object
//so it will return a function
//Call and apply method were called directly but not the bind method

let name = {
  firstname: "Mohd",
  lastname: "Afjal",
};

function printFullName(hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + state
  );
}

let printMyName = printFullName.bind(name, "Nawalgarh", "Rajasthan");
printMyName();
//
