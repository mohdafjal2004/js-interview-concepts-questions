// * 10 : Promise Polyfill Implementation !Important

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

// Inbuilt Promise.all()
Promise.all([
  importantAction("Mohd Afjal"),
  winTheWorld("Do is right now, win"),
]);
// .then((res) => console.log(res));

// Polyfill for Promise.all()
Promise.allPolyfill = (promises) => {
  //Write here
  return new Promise((resolve, reject) => {
    const result = [];
    if (!promises.length) {
      resolve(result);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        result[index] = res;
        pending--;
        if (pending == 0) {
          resolve(result);
        }
      }, reject);
    });
  });
};

Promise.allPolyfill([
  importantAction("Mohd Afjal"),
  winTheWorld("Do is right now, win"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
