//let Hoisting

console.log(count);
let count = 1;

//Above code gives error,Cannot access 'count' before initialization
//Internally it is hoisted, inside the "Temporal dead Zone"

//Temporal Dead Zone = Time blw declaration & initialization(assigning) of
// " let ","var"

//Same applies for count
console.log(a);
const a = 2;
