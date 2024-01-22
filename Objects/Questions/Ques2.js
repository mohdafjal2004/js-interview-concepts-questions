// * Q-4:  What is JSON.stringify() and JSON.parse()

const user = {
  name: "Mohd Afjal",
  age: 23,
};
const str = JSON.stringify(user);
console.log(str);

localStorage.setItem("test", str); //LocalStorage can only have string

//Remember after using JSON.stringify() on object user,
//we can't access the keys of the users object
//becoz the user is no more a JS object but a plain string that
//contains the serialized data

// So to get access of the keys back again, we need to convert it back to
// a js object(JSON) using JSON.parse()
const obj = JSON.parse(str);
console.log(obj.age);

console.log(localStorage.getItem("test"));
//Rememberto parse object back to JS object

// * Q-5 :- Whats the output ?
console.log([..."Mohd Afjal"]);//Spread operator on the String
// Output: ['M', 'o', 'h', 'd', ' ', 'A', 'f', 'j', 'a', 'l']


// Spread operator on object
const user2 = { name: "Afjal", age: 23 };
const admin = { admin: true, ...user };
console.log(admin);

// * Q-6 What's the output?
const settings = {
  username: "Sonu",
  level: 23,
  health: 99,
};
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
