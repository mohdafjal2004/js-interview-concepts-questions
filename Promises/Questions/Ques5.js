// * Q-9: Solve Problem Recursively

// function promRecurse(funcPromise) { //funcPromise is an array which
// contains Promises
//Write implementation Here

// }

// Solution

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Brand ${username}`);
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
function promRecurse(funcPromise) {
  //funcPromise is an array
  //which contains Promises
  if (funcPromise.length === 0) {
    return;
  }
  const currPromise = funcPromise.shift();
  currPromise
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  promRecurse(funcPromise); //Recursion
}

promRecurse([importantAction("Mohd Afjal"), winTheWorld("Just do it win")]);

// * 10 : Promise Polyfill Implementation
function PromisePolyfill(executor) {
  //Write here

  //for Asynchronous code
  let onResolve, onReject;

  //   For Synchronous code
  let isFulFilled = false, //for resolve
    isRejected = false, //for reject
    isCalled = false,
    value;

  function resolve(val) {
    isFulFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(value);
      isCalled = true;
    }
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFulFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

// Example for testing the above Polyfill
const examplePromise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.error(error));

//   Polyfill for resolve
PromisePolyfill.resolve = (val) => {
  return new PromisePolyfill(function executor(resolve, reject) {
    resolve(val);
  });
};
//   Polyfill for reject
PromisePolyfill.reject = (val) => {
  return new PromisePolyfill(function executor(resolve, reject) {
    reject(val);
  });
};
