// * Q-7  :- What's the Output?
const shape = {
  radius: 10,

  //Regular function,"this" keyword in this function points to local scope
  diameter() {
    return this.radius * 2;
  },
  //Arrow function,"this" keyword in this function points to outer scope of "shape"
  //  object in which "shape" object is created
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NaN, becoz radius is not defined in global scope

// * Q-8 What is destructuring in objects ?
const user = {
  name: "Afjal",
  age: 23,
  fullName: {
    first: "Mohd",
    last: "Afjal Khan",
  },
};

// Changing the key name of "name" property
const { name: MyName } = user;
console.log(MyName);

// Further destructuring the fullName property
const {
  fullName: { first },
} = user;
console.log(first);
