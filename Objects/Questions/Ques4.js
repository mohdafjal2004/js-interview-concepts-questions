// * Q-9 : What's the output ?
function getItems(fruitList, favouriteFruit, ...args) {
  return [...fruitList, ...args, favouriteFruit];
}
console.log(getItems(["banana", "apple"], "peer", "orange"));

// In Parameters, rest operator need to be the last parameter
//and in arguments, spread operator should be at the last argument

//Else in remaining case, spread operator can be places anywhere

// ⁡⁣⁣⁢Object refernce⁡ question starts here
// * Q-10: What's the Output?
let c = { greeting: "Hey!" };
let d;
d = c;

d.greeting = "Hello";
console.log(c.greeting); //Hello

// Since object c is provided to variable d as reference, now d can access
// all the properties of c, so now if any changes is made by "c" or  "d"
// Changes will be reflected in the object , becoz ultimately the object
// is single and reference is made to 2 variables, so changes made by any
// one will gets reflected in the object and updated data will be shown
// to another  reference variable also

//* Q -11 : What's the output ?
console.log({ a: 1 } == { a: 1 }); //false
// console.log({ a: 1 } === { a: 1 }); //false

// Here both the objects are considered independent becoz js checks whether both objects occupy ⁡⁢⁢⁢𝘀𝗮𝗺𝗲 𝗺𝗲𝗺𝗼𝗿𝘆⁡ even if both objects
// have same properties and values but here objects occupy different memory so they are not equal, so it does'nt matter
// whether we are are comparing strictly or loosely

// Objects can be made equal only by ⁡⁣⁣⁢𝗼𝗯𝗷𝗲𝗰𝘁 𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗶𝗻𝗴⁡

// *  Q-12 : What's the output ?
let person = { name: "Afjal" };
const members = [person];
person = null;
console.log(person);
// This means the variable person no longer points to the object, essentially "disconnecting" it.
console.log(members); //Output: [ { name: 'Afjal' } ]
// if we put "person = null",it still gives output as the object
//  becoz only the object refernce variable is set to null not the actual object
// but if we put "person.name = null", now it will output as null

// * Q-13 : What's the output ?
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

//? Modifying the cloned(copy) object,not the original object
multiply(); //20, here we are just cloning the value object and then
// changing the data in cloned object, which won't change original object

//? Modifying the cloned(copy) object,not the original object
multiply(); //20, here we are just cloning the value object and then
// changing the data in cloned object, which won't change original object

// ? Modifying the original object
multiply(value);
console.log(value);
//20,  here original value object is refernced to x, so any changes
//made in "x" will get reflected in original object

multiply(value); //40, since in the previous function the data of original
// object was changed, so if we call the fucntion again with value as
// parameter it will call the original object

multiply(value);

