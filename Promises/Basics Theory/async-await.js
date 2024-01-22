//* Async-await : async makes the function return a promise
// * await await the entire async function to wait so that Promise
// * gets resolved

// * Ex-1
async function fetchData() {
  console.log("Fetching data...");
  // Simulating an asynchronous operation with a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Data fetched!");
  return "Data";
}

async function main() {
  console.log("Start");
  const result = await fetchData();
  console.log("Received:", result);
  console.log("End");
}
// main();

// * Ex-2 : Always use try-catch for handling error of async-await
async function greet() {
  console.log("Preparing greeting...");
  await new Promise((resolve, reject) =>
    setTimeout(reject("Rejected in the Promise"), 1000)
  );
  console.log("Hello!");
}

// Calling the async function
async function main() {
  console.log("Start");
  try {
    await greet();
  } catch (error) {
    console.log("Error", error);
  }
  console.log("End");
}

// Executing the main function
main();
