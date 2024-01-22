//Debouncing in Javascript
let count = 0;

// A function for calling the API and get Data
const getData = () => {
  //calls an API and gets Data
  console.log("Fetching..." + count++);
};


const MachineGoodShooting  = () => {
  console.log("Shooting stopped")
}


// A better function which will actually do some magic
//that is only call getData function when the time between two
//key strokes is  >= 300ms

const doSomeDebounceMagic = (fn, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;

    // Clear the timer when there is another keystroke
    clearTimeout(timer);

    // execute the getData function after delay
    timer = setTimeout(() => {
      //Used apply method to fix "this" context issues
      fn.apply(context, args);
    }, delay);
  };
};
const betterFunction = doSomeDebounceMagic(getData, 300);
const betterFunction2 = doSomeDebounceMagic(MachineGoodShooting, 300);
