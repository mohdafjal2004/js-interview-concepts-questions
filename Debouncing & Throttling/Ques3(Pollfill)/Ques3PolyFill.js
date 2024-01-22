//*  Q-3 : Create debounce() Polfill implementation !⁡⁢⁣⁢Important⁡

let btnPress = document.getElementById("increment_presses");
let count = document.getElementById("increment_count");
let btn = document.getElementById("increment_btn");

var pressedCount = 0;
var triggerCount = 0;

//Debounce() Polyfill : It takes 2 arguments callback fxn and delay time
const myDebounce = (cb, delay) => {
  let timer;

  //It returns a anonymous function which handles extra arguemnts
  return function (...args) {
    //clearing the timer, side by side
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

//Using Polyfill Debounce()
const debouncedCount = myDebounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;

  // Debouncing using lodash, that is after inactivity of 800ms
  //then only "count" should increase
  debouncedCount();
});
