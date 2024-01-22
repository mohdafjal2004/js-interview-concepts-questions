// * Q-4: What's the output? (Related to Promise Chaining)
// * without "return" keyword

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

// let promise = job();

promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 4");
  });

/* 
Output
Error 1
Success 4
*/

// * Q-5: What's the output? (Related to Promise Chaining(Advanced))
// * with return keyword

function job2(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise2 = job2(true);

promise2
  .then(function (res) {
    console.log(res); //"success"
    return job2(false); // it returns "error"
  })
  //   so to handle "error" from upper .then(), we use .catch()
  .catch(function (error) {
    console.log(error);
    return "Error Caught";
  })

  // This ".then()" is skipped, becoz the promise2 has already rejected.
  .then(function (res) {
    console.log(res);
    return job2(true);
  })
  .catch(function (error) {
    console.log(error);
  });

/* 
Output
success
error
Error caught
*/
