const button = document.querySelector("button");
const expensiveFunc = () => {
  console.log("Some expensive Calculation Going on here");
};

const handleThrottle = (fn, limit) => {
  //We do not want to reinitialise the flag again and again
  let flag = true;
  return function () {
    //*  Call the function only when this limit is touched or crossed
    //*  Also the call the function when the flag is true

    //edge-case:Handling the "this" case and arguments
    let context = this;
    args = argument;

    // Initial call the function
    if (flag) {
      fn.apply(context, args);
      flag = false;

      //   Delayed the function execution till the limit is reached
      setTimeout(() => {
        flag = true;
        fn();
      }, limit);
    }
  };
};

const BetterexpensiveFunc = handleThrottle(expensiveFunc, 1000);

button.addEventListener("click", BetterexpensiveFunc);
