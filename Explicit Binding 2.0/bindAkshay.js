//Bind method will just create a copy of the function and will bind to the object
//so it will return a function
//Call and apply method  are directly called  but not the bind method
//bind method return a funciton and this returned function returns
// the desired value

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
