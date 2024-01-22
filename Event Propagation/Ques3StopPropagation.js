const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// * Q-5 : How to stop bubbling or Capturing ? 
// Using e.stopPropagation(), Propagtion will be limited to the element
//to which the event is attached, and won't go to parent component


div.addEventListener("click", function (e) {
  e.stopPropagation();

  alert("div");
});
form.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("form");
});
button.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("button");
});
