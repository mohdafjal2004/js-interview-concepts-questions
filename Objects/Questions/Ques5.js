// * Q-14 : what's the output?
function changeAgeReference(person) {
  person.age = 25;
  person = {
    name: "Afjal",
    age: 50,
  };
  // This is the new object created and is not connected to anything outside the function
  // This new object and person1 object are in two different memory

  return person;
  // Here this newly created object is returned
}
const person1 = {
  name: "Sonu",
  age: 23,
};

const person2 = changeAgeReference(person1);
console.log(person1);
//{ name: 'Sonu', age: 25 },becoz inside fxn, age is reassigned
console.log(person2); //{ name: 'Afjal', age: 50 }

// * Q-15 What's the Shallow copy and Deep copy of an object?
//Solution is in notebook
//𝗗𝗲𝗲𝗽 𝗖𝗼𝗽𝘆: Creating a copy of object and any made in copy
//object won't affect the original object and vice-versa

// 𝗦𝗵𝗮𝗹𝗹𝗼𝘄 𝗖𝗼𝗽𝘆 : Creating a copy of object but this time any changes
// is made in the copied object will change the properties
// of original object and vice-versa

// * Q-16 :How to deep copy/clone an object ?
let user = {
  name: "Mohd Afjal",
  age: 23,
};

// Method 1 :  shallow copy
const objClone = Object.assign({}, user);
objClone.name = "Sonu";
console.log(user, objClone);

// Method2 : Deep Copy
const objClone2 = JSON.parse(JSON.stringify(user));
objClone2.name = "Millionare";
console.log(user, objClone2);

// Method 3 :  shallow copy
const objClone3 = { ...user };
objClone3.name = "Millionare";
console.log(user, objClone3);
