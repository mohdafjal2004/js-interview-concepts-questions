// * Q-7: What's the output?

// create a promise called 1st promise which will resolved to a text
// called 1st  then create a second promise which will resolved to 1st
// promise, then resolve second promise and output of this second
// promise is passed to 1st promise and then print the 1st promise

const firstPromise = new Promise((resolve, reject) => {
  resolve("first");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => console.log(res));

// * Q-8: Rewite this example code using 'async-await
//* instead of '.then/.catch

function loadJson(url) {
  return fetch(url).then((res) => {
    console.log(res);
    if (res.status == 200) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  });
}
// loadJson("https://jsonplaceholder.typicode.com/todos/1").catch((err) =>
//   console.log(err)
// );

// Solution
const loadJson2 = async (url) => {
  try {
    const res = await fetch(url);
    console.log(res);
    if (res.status == 200) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
};
loadJson2("https://jsonplaceholder.typicode.com/todos/1");
