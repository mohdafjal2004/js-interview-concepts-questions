//reduce() : It reduces all the array elements to a single value

// Array.reduce((accumulator,current Value, index, arr) => {},initial value)
//Synatx Wise : It takes a callback function and an initial value(optional)
// as an argument

//In callback function it again takes four arguments, a accumluator which contains
// multiple accumulated value, and remaining all three arguments
//are same as the arguments of map() and reduce() method

//if the user don't provide the initial Value,
//  by-default first element's value is set equal to value of accumulator

const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);
