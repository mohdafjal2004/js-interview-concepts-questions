// * Q-4 : Call "printAnimals" such that it prints all animals in object
const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log(i + " " + this.species + " :" + this.name);
  };
  this.print();
}

// Solution begins here
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// * Q-5 : Append an array to another array
// We have to use concat becoz it returns a new array

const array = ["a", "b"];
const elements = [0, 1, 2];

// array.push(elements); //👎
// Push method without apply() is simply pushing entire array like this
//  [ 'a', 'b', [ 0, 1, 2 ] ], so we use apply() method to do

array.push.apply(array, elements);

console.log(array);

// * Q-6 : Using "apply" to enhance built-in functions

// * Find min/max number in an array

const numbers = [5, 6, 2, 3, 7];

console.log(Math.max(5, 6, 2, 3, 7));
//Using Built-in Methods of Math, which can calculate on numbers which
//are simply passed inside it,will give desired result, but it will not
//work on arrays or array-like objects, so we use apply() for array

console.log(Math.max.apply(null, numbers));
