// * : What is Call?
var obj = { name: "Afjal" };
function sayHello(age) {
  return "Hello " + this.name + " and age is " + age;
  //"this" will target the global scope for property name equals to "name"
  //but here outside the function the "name" is inside the object
  //  so to access a specific object inside a function we use "call()"
}
console.log(sayHello.call(obj, 24));

// * What is Apply ?
var obj2 = { name: "Afjal" };
function sayHello2(age, profession) {
  return "Hello " + this.name + " and age is " + age + profession;
  //"this" will target the global scope for property name equals to "name"
  //but here outside the function the "name" is inside the object
  //  so to access a specific object inside a function we use "call()"
}
console.log(sayHello2.apply(obj2, [24, " Software Engineer"]));

// * What is Bind ?
var obj3 = { name: "Afjal" };
function sayHello3(age) {
  return "Hello " + this.name + " and age is " + age;
  //"this" will target the global scope for property name equals to "name"
  //but here outside the function the "name" is inside the object
  //  so to access a specific object inside a function we use "call()"
}

const bindFunc = sayHello3.bind(obj3);
//So the bind() method returns a new function which is reusable and can
//be used as needed
console.log(bindFunc(34));
console.log(bindFunc(12));
