const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// * Q-4 Event-Capturing / Event-Trickling : Just adding an object
//* where capture property is set to true

div.addEventListener(
  "click",
  function () {
    alert("div");
  },
  {
    capture: true,
  }
);
form.addEventListener(
  "click",
  function () {
    alert("form");
  },
  {
    capture: true,
  }
);
button.addEventListener(
  "click",
  function () {
    alert("button");
  },
  {
    capture: true,
  }
);