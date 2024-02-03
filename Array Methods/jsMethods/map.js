//map() method

const nums = [1, 2, 3, 4, 5];

//Map() takes a callback transformation function as an argument
// nums.map((num,i,arr) => {});

//((num,i,arr) => {}) is the arrow callback tranformation function.
//which acts as the argument for the map method and 𝗺𝘂𝘀𝘁 𝗿𝗲𝘁𝘂𝗿𝗻 𝗮 𝘃𝗮𝗹𝘂𝗲

//Now the callback function again has three arguments

//1. 𝗻𝘂𝗺 is the current element being transformed
//2. 𝗶 is the index of the current element being tranformed
//3. 𝗮𝗿𝗿 is the array on which the map() method is applied

const multiplyThree = nums.map((num, i) => {
  return num * 3;
});
console.log(multiplyThree);
