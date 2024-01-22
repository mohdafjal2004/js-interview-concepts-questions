// * Q-1 : What's the Output ?
const user = {
  firstName: "Mohd",
  getName() {
    const firstName = "Afjal";
    return this.firstName;
  },
};
console.log(user.getName());
//Output : 𝗠𝗼𝗵𝗱, becoz "this" inside a function is always used to point
// at the parent object properties, not the function's self properties

// * Q-2 : What's the result of accessing its ref ? Why?
function makeUser() {
  return {
    name: "Afjal",
    ref: this, //Here this "this" is referring to window object
  };
}

let user2 = makeUser();
console.log(user2.ref.name);
//Since here "this" is referring to window object(global scope object)
//Becoz "this" keyword in function always target the properties of
//which is just outside the scope of this function,like here "this" was
//targeting to global scope object(window object)
//and since here there is no name properties,so it gives 𝘂𝗻𝗱𝗲𝗳𝗶𝗻𝗲𝗱

//Fixing above function
function makeUser2Fix() {
  return {
    name: "Sonu",
    ref() {
      return this; //Here also "this" will target property which is
      //just outside the scope of function, which is `name : "Sonu"`
    },
  };
}

let user2Fix = makeUser2Fix();
console.log(user2Fix.ref().name);

// * Q-3 : What's the output?
const user3 = {
  name: "MOhd Afjal",
  logMessage() {
    console.log(this.name); //What is logged?
  },
};
setTimeout(user3.logMessage, 1000); //Undefined
//Inside the setTimeOut function, whatever is passed is treated as
//callback function not as a method, so in this case `user3.logMessage` is
//now treated as callback function and callback function are executed
//indepenedently so the `user.logMessage` is no longer have access to this
// user3 object properties, so it will result into 𝘂𝗻𝗱𝗲𝗳𝗶𝗻𝗲𝗱 ,else
//in this case the `user.logMessage` now only has access to window
//object

// Fixing the method and callBack function
//So here we just try to avoid to call the `user.logMessage`  as callback
//function and try to call it as method
setTimeout(function () {
  user.logMessage();
}, 1000);
