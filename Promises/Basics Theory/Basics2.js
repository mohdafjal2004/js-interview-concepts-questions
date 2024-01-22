// * Ex-2 Synchronous vs Asynchronous Code

// !Problem in asynchronous code
//? Synchronous Code
// console.log("start");

//? Asynchronous Code
// function importantAction(username) {
//   setTimeout(() => {
//     return `Subscribe to ${username}`;
//   }, 1000);
// }
// const message = importantAction("Mohd Afjal");
//? Undefined, becoz result of asynchronous code is not handled
// console.log(message);

//? Synchronous Code
// console.log("stop");

//! Resolving above Asynchronous code
console.log("Start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Brand ${username}`);
  }, 1000);
}
function winTheWorld(action, cb) {
  setTimeout(() => {
    cb(`${action} this world`);
  }, 1000);
}

// Callback function to be passed as argument into another function
// for resolving the result of asychronous function

const message = importantAction("Mohd Afjal", function (message) {
  console.log(message);
  //  We are nesting winTheWorld() into the callback function of
  // importantAction() so that when importantAction() function
  //  is called then only the winTheWorld() function is called.
  //But this nesting of winTheWorld() inside the importantAction()
  //   function making the code messy, this is called call-back hell

  winTheWorld("Win", (action) => {
    console.log(action);
  });
});

console.log("Stop");

// So to overcome the problem created by messying up the code by callback
//function, we use "promises"
