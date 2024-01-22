// Promises: Represent upcoming completion and failure
//of an  asynchronous event

console.log("start");

// Creating a 𝗽𝗿𝗼𝗺𝗶𝘀𝗲 𝗼𝗯𝗷𝗲𝗰𝘁 from 𝗣𝗿𝗼𝗺𝗶𝘀𝗲 𝗖𝗹𝗮𝘀𝘀, which 😒 still takes
// 𝗰𝗮𝗹𝗹𝗯𝗮𝗰𝗸 as 𝗮𝗿𝗴𝘂𝗺𝗲𝗻𝘁

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve("Hello Result");
    } else reject(new Error("Hello Error"));
  }, 2000);
});

//𝗣𝗿𝗶𝗻𝘁𝗶𝗻𝗴 𝘁𝗵𝗲 𝗽𝗿𝗼𝗺𝗶𝘀𝗲 𝗼𝗯𝗷𝗲𝗰𝘁 𝘄𝗶𝘁𝗵𝗼𝘂𝘁 𝗿𝗲𝘀𝗼𝗹𝘃𝗶𝗻𝗴 𝗶𝘁
console.log(sub); //It gives output as 𝗣𝗿𝗼𝗺𝗶𝘀𝗲 { <𝗽𝗲𝗻𝗱𝗶𝗻𝗴> }
//which means that it gave result as Promise object which is still
//pending to be resolved

// 𝗥𝗲𝘀𝗼𝗹𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗣𝗿𝗼𝗺𝗶𝘀𝗲, both .then() and .catch() are taking
// callback function as argument to specify what actions should be
// taken once the promise is resolved or rejected

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("stop");
