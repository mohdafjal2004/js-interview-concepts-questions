// * Q-7 : What's the output ?

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// Event of Propagation should be -> that first form should be executed,
// then button and then div element

div.addEventListener("click", function () {
  alert("div");
});
form.addEventListener(
  "click",
  function () {
    alert("form");
  },
  {
    capture: true,
  }
);
button.addEventListener("click", function () {
  alert("button");
});


// * Q-8 : Create a Modal which closes by clicking on negative space?
// Modal means dialog box in current page, so when clicking 
// outside the Modal(negative space) , Modal should close

