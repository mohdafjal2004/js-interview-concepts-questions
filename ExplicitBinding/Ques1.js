// * Q-1 OP Based Question

const person = { name: "Afjal" };
function sayHi(age) {
  return `${this.name} is ${age} years old`;
}

console.log(sayHi.call(person, 24));
// Output : Afjal is 24 years old, it will be called instantly

console.log(sayHi.bind(person, 24));
//Output: [𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻: 𝗯𝗼𝘂𝗻𝗱 𝘀𝗮𝘆𝗛𝗶],becoz bind() method returns a
//new function so to handle that returning function we always assign
//this sayHi.bind() to a 𝘃𝗮𝗿𝗶𝗮𝗯𝗹𝗲 and can used this new function later on

const bindFunc = sayHi.bind(person, 24);
console.log(bindFunc()); //Afjal is 24 years old

// * Q-2 : Call with function inside the object( ⁡⁣⁢⁢!𝗟𝗶𝘁𝘁𝗹𝗲-𝗕𝗶𝘁-𝗖𝗼𝗺𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻⁡)
const age = 10;

var person1 = {
  name: "Afjal",
  age: 23,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
console.log(person1.getAge.call(person2));
//Output: 𝟮𝟰,since we are using call(), so we are explicitly controlling
//that person2 object properties should be called
//This works same for both apply() and bind()

// * Q-3 : What is the Output?
var status = "😎";

setTimeout(
  //Callback function starts
  () => {
    console.log(this); //Windows object in browser environment
    //{} empty object in arrow function in Nodejs encironment
    //another object with lots of properties and methid in Nodejs environment
    const status = "😍";
    console.log(status); //😍

    //Object starts here
    const data = {
      status: "🥑",

      getStatus() {
        return this.status;
      },
    };

    //Objects ends here
    console.log(data.getStatus()); //🥑
    console.log(data.getStatus.call(this)); //Output : 😎 in broswer,
    //Output :  𝘂𝗻𝗱𝗲𝗳𝗶𝗻𝗲𝗱 in Nodejs  environment
  },
  0
);

//The callback function of setTimeout behaves as a standalone function
//in JavaScript. Here, the "this" keyword inside the callback refers to the
// global object (e.g., window in a browser) because the callback is
// invoked by the setTimeout mechanism, not by a specific object.

//If the callback function is regular function
//"this" is dynamically bound during call, so within the setTimeout callback,
// it refers to the global object (global object = window object in browser
// and {} in Nodejs environment) due to execution context.

const chai = () => {
  console.log(this);
};

chai();

function coffee() {
  console.log(this);
}
coffee();
