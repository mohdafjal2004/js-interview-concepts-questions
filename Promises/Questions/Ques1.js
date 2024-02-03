// * Q-1: What's the output?
console.log("Start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  //This is synchrnouse code and  executed immediately during promise
  //creation even when the state of promise is pending
  resolve(2);
  //It is asynchronous code which will be executed in next
  //event loop cycle
});

promise1.then((res) => {
  console.log(res);
});
console.log("end");

/*Output :
Start
1
end
2
*/

//* Q-2: What's the output?
console.log("Start");

const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise2.then((res) => {
  console.log(res);
});
console.log("end");

/*Output :
Start
1
3
end
2
*/

// * Q-3 : What's the output?
// *Make sure to check when the function is called then only the
// * Promise will be resolved

console.log("Start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});
console.log("end");

/*Output :
Start
middle
1
3
end
2
*/
