//Syntax of Map() method,it takes a callback function as an argument
//Array.map((num,i,arr) => {})

//Polyfills for map() method
//Here while making a custom map() method, we take again a callback function

Array.prototype.myMap = function (cb) {
  //Empty array, becoz by-default map() returns a new array
  let mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    // Array.map((num,i,arr) => {}),
    //"𝘁𝗵𝗶𝘀" means the current array on which this myMap method is called
    // create the method according to the syntax of original method
    // Instead of just pushing the current array element, 
    // we push the result of applying the callback(cb) function to it
    mappedArray.push(cb(this[i], i, this));
  }
  //? Remember "mappedArray.push(cb(this[i], i, this))" means we are passing the tranformed value to the ⁡⁢⁣⁢same index⁡ so
  // ? first in the "cb()" function first we we are passing the tranformed value and then the index of the element
  return mappedArray;
};

//Now lets test the method
const nums = [1, 2, 3, 4, 5];

const mutliplyThree = nums.myMap((num, i, arr) => {
  return num * 3;
});

console.log(mutliplyThree);
