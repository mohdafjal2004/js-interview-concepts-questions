//Basics of Promises

// Synchronous vs Asynchronous Code

// * Ex- 1 of Synchronous vs Asynchronous Code
// Synchronous Code: Means code is executed line by line
console.log("Synchronous: 1 Start");
console.log("Synchronous: 2 Mid");
console.log("Synchronous: 3 End");

// Asynchronous Code : Means execution of code is not line-by-line
console.log("Asynchronous: 1 Start");
setTimeout(() => {
  console.log("Asynchronous: 2 Mid");
}, 0);
console.log("Asynchronous: 3 End");

// Becoz JS is single-threaded lanaguage, and it cannot execute
//setTimeout in parallel as our code is executed, so JS first execute
//Synchronous Code and then it execute Asynchronous Code doesn't matter
//whether we delay the Asynchronous Code using setTimeout Asynchronous Code
// is still going to execute at last


