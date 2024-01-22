//*  Q-4 : Create throttle() Polfill implementation !⁡⁢⁣⁢Important⁡

let btnPress = document.getElementById("increment_presses");
let count = document.getElementById("increment_count");
let btn = document.getElementById("increment_btn");

var pressedCount = 0;
var triggerCount = 0;

//Throttle() Polyfill : It takes 2 arguments callback fxn and delay time
const myThrottle = (cb, delay) => {
  let lastTime = 0;

  //It returns a anonymous function which handles extra arguemnts
  return function (...args) {
    let currentTime = new Date().getTime();
    if (currentTime - lastTime < delay) {
      return;
    }
    lastTime = currentTime;
    return cb(...args);
  };
};

//Using Polyfill Throttle()
const throttleCount = myThrottle(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;

  // Debouncing using lodash, that is after inactivity of 800ms
  //then only "count" should increase
  throttleCount();
});
