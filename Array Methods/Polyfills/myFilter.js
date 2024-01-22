//Polyfill for filter()

//Remember Array is an class
Array.prototype.myFilter = function (cb) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      //Only pass the filtered here not with the "cb" function
      filteredArray.push(this[i]);
    }
  }
  //? Here only filtered element is passed into "cb" function not the index , becoz it is not necessary that after filtering
  // ? the element will still get the same index
  return filteredArray;
};

//And here numbers array is the object of Array class
const numbers = [1, 2, 3, 4, 5];
const moreThanTwo = numbers.myFilter(function (num) {
  return num > 2;
});
console.log(moreThanTwo);
