const grandParent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

//* Remember first of all Capturing(if used) and then bubbling happens

//? 𝗦𝗶𝗺𝗽𝗹𝗲 𝗘𝘃𝗲𝗻𝘁-𝗯𝘂𝗯𝗯𝗹𝗶𝗻𝗴(𝗯𝘆-𝗱𝗲𝗳𝗮𝘂𝗹𝘁 𝗯𝗲𝗵𝗮𝘃𝗶𝗼𝗿)
grandParent.addEventListener("click", () => {
  console.log("Grand Parent is clicked");
});
parent.addEventListener("click", () => {
  console.log("Parent is clicked");
});
child.addEventListener("click", () => {
  console.log("Child is clicked");
  
});

// ⁡⁣⁣⁢𝗢𝘂𝘁𝗽𝘂𝘁⁡
// When Child is clicked then Output will be Event Bubbling
// Child is clicked
// Parent is clicked
// Grand Parent is clicked

// When Parent is clicked then Output will be Event Bubbling
// Parent is clicked
// Grand Parent is clicked

// When Grand Parent is clicked then Output will be Event Bubbling
// Grand Parent is clicked

//? 𝗖𝗮𝘀𝗲𝟭: 𝗘𝗻𝗮𝗯𝗹𝗶𝗻𝗴 𝗘𝘃𝗲𝗻𝘁 𝗖𝗮𝗽𝘁𝘂𝗿𝗶𝗻𝗴 𝗶𝗻 𝗚𝗿𝗮𝗻𝗱 𝗣𝗮𝗿𝗲𝗻𝘁
// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("Grand Parent is clicked");
//   },
//   true
// );

// parent.addEventListener("click", () => {
//   console.log("Parent is clicked");
// });
// child.addEventListener("click", () => {
//   console.log("Child is clicked");
// });

// ⁡⁣⁣⁢𝗢𝘂𝘁𝗽𝘂𝘁⁡
// When Child is clicked then Output will be
// Grand Parent is clicked
// Child is clicked
// Parent is clicked

// When Parent is clicked then Output will be
// Grand Parent is clicked
// Parent is clicked

// When Grand Parent is clicked then Output will be
// Grand Parent is clicked

//? 𝗖𝗮𝘀𝗲𝟮: 𝗘𝗻𝗮𝗯𝗹𝗶𝗻𝗴 𝗘𝘃𝗲𝗻𝘁 𝗖𝗮𝗽𝘁𝘂𝗿𝗶𝗻𝗴 𝗶𝗻 𝗣𝗮𝗿𝗲𝗻𝘁
// grandParent.addEventListener("click", () => {
//   console.log("Grand Parent is clicked");
// });

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent is clicked");
//   },
//   true
// );
// child.addEventListener("click", () => {
//   console.log("Child is clicked");
// });

// ⁡⁣⁣⁢𝗢𝘂𝘁𝗽𝘂𝘁⁡
// When Child is clicked then Output will be
// Parent is clicked
// Child is clicked
// Grand Parent is clicked

// When Parent is clicked then Output will be
// Parent is clicked
// Grand Parent is clicked

// When Grand Parent is clicked then Output will be
// Grand Parent is clicked

//? 𝗖𝗮𝘀𝗲3: 𝗘𝗻𝗮𝗯𝗹𝗶𝗻𝗴 𝗘𝘃𝗲𝗻𝘁 𝗖𝗮𝗽𝘁𝘂𝗿𝗶𝗻𝗴 𝗶𝗻 𝗖𝗵𝗶𝗹𝗱 ⁡⁣⁣⁢= Simple Bubbling⁡
// grandParent.addEventListener("click", () => {
//   console.log("Grand Parent is clicked");
// });

// parent.addEventListener("click", () => {
//   console.log("Parent is clicked");
// });
// child.addEventListener(
//   "click",
//   () => {
//     console.log("Child is clicked");
//   },
//   true
// );

// ⁡⁣⁣⁢𝗢𝘂𝘁𝗽𝘂𝘁⁡
// When Child is clicked then Output will be
// Child is clicked
// Parent is clicked
// Grand Parent is clicked

// When Parent is clicked then Output will be
// Grand Parent is clicked
// Parent is clicked

// When Grand Parent is clicked then Output will be
// Grand Parent is clicked

//? 𝗖𝗮𝘀𝗲$: 𝗘𝗻𝗮𝗯𝗹𝗶𝗻𝗴 𝗘𝘃𝗲𝗻𝘁 𝗖𝗮𝗽𝘁𝘂𝗿𝗶𝗻𝗴 𝗶𝗻 𝗖𝗵𝗶𝗹𝗱 and Parent
// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("Grand Parent is clicked");
//   },
//   true
// );

// parent.addEventListener("click", () => {
//   console.log("Parent is clicked");
// });
// child.addEventListener(
//   "click",
//   () => {
//     console.log("Child is clicked");
//   },
//   true
// );
