//* Promise Combinators

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Brand ${username}`);
    }, 1000);
  });
}

function winTheWorld(action) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(` ${action} this world`);
    }, 1000);
  });
}



//*Type 1: Promise.all() : If any 1 fails, it fails all

Promise.all([importantAction("Afjal"), winTheWorld("Just do it now win")])
  .then((res) => console.log(res, "Inside all"))
  .catch((error) => console.log(error));

//*Type 2: Promise.race(): It returns the 1st Promise, who fails/success
Promise.race([importantAction("Afjal"), winTheWorld("Just do it now win")])
  .then((res) => console.log(res, " Inside race"))
  .catch((error) => console.log(error));

//*Type 3: Promise.allSettled(): If any 1 fails or not, it still output
// * of entire array with resolved or rejected array
Promise.allSettled([
  importantAction("Afjal"),
  winTheWorld("Just do it now win"),
])
  .then((res) => console.log(res, "Inside allSettled"))
  .catch((error) => console.log(error));

//*Type 4: Promise.any(): Same like race(), but it ignores the rejected
// * and only returns resolved until all are rejected
Promise.any([importantAction("Afjal"), winTheWorld("Just do it now win")])
  .then((res) => console.log(res, "Inside any"))
  .catch((error) => console.log(error));
