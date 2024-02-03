// * Q-6: What's the output? (Related to Promise Chaining(Advanced))
// * with return keyword

// follow up question of Question 5

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (res) {
    console.log(res); //success
    return job(true);
  })
  .then(function (res) {
    if (res !== "victory") {
      throw "Defeat"; //throw rejects the promise, stopping further
      //.then() calls
    }

    // Since the promise is rejected, then this line is ignored
    return job(true);
  })

  //  This 3rd ".then()" is skipped becoz second .then() throws an error
  //so to handle this error , .catch()  is required
  .then(function (res) {
    console.log(res);
  })

  //   The error from second .then() error is passed  to this .catch
  .catch(function (error) {
    console.log(error);
    return job(false); //Again this will reject the Promise, which won't be
    // handled by below .then()
  })

  //in above .catch(), again the promise rejected,
  // so  also this .then() will be ignored
  .then(function (res) {
    console.log(res);
    return job(true);
  })

  // Rejected value from 1st catch is handled by this 2nd .catch()
  .catch(function (error) {
    console.log(error);
    return "Error Caught"; //This line is just for confusion
    // becoz this line returns a resolved Promise

    //Key Point: Returning a resolved promise
    // from a .catch() resumes the chain.
  })

  //   this will not be skipped becoz the Rejected promise in 1st
  // .catch() is handled by second .catch()

  //   So in .catch(), the line set just for confusion will be used in this
  //.then() block
  .then(function (res) {
    console.log(res);
    return new Error("Test"); //This line is also for confusion
    // Here Error is also an String, so it
    // will not reject the Promise

    //The data from above confusing line is handled by below .then() block
  })
  .then(function (res) {
    console.log("Success", res.message);
  })

  .catch(function (res) {
    console.log("Error", res.message);
  });
