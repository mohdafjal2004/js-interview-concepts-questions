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

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus()); //🥑
  console.log(data.getStatus.call(this)); //😎
}, 0);

//"this", inside a setTimout  function is treated as callback function
//and if "this" is used inside a callback function then it targets to
// global scope function ,so "this" targeted global scope variable which
// here is status = "😎"
