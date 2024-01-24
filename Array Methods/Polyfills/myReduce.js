//Polyfills for Reduce() method

//Standard syntax of reduce() method
// Array.reduce((accumulator,current Value, index, arr) => {},initial value)

Array.prototype.myReduce = function (cb, initalValue) {
  //if user don't provide any initial Value then By-default
  //the first element of the array  is set to initialValue since
  // initialValue is current Value for now, so it is set to accumulator

  var accumulator = initalValue; //?Here accumulator will store the resulted single value, intially set to initialValue

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    //? Updating the accumulator after appyling the condition that if accumulator is equal to initialValue
    // ? then work on callback function else passed the current value into the accumulator
  }

  return accumulator;
};

Array.prototype.myReduce2 = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

//Lets try the custom myReduce() method
const nums = [1, 2, 3, 4, 5];

const sum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);
