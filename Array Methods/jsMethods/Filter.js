//Filter() : Synatx wise same as Map() method
//It returns a new array ,it perform  a test on each element of the array
//and if the element passess the test then it is included in new array
//else it is excluded

const numbers = [1, 2, 3, 4, 5];
const evenNum = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNum);
