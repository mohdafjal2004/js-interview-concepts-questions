// * Q -2 : Create a button UI and add throttle as follows =>
//  --> Show "button Pressed <X> Times" every time button is pressed
//  --> Increase "Triggered <Y> Times" count after 800ms of debounce

let btnPress = document.getElementById("increment_presses");
let count = document.getElementById("increment_count");
let btn = document.getElementById("increment_btn");

var pressedCount = 0;
var triggerCount = 0;

//Function for loading the debounce function from "lodash"
const throttledCount = _.throttle(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;

  // Debouncing using lodash, that is after inactivity of 800ms
  //then only "count" should increase
  throttledCount();
});
