//Map vs for-Each

//Both the methods are used for iterating over each elements of the array

//⁡⁢⁢⁢map method returns a new array⁡ after transforming each element of the array
const arr = [2, 5, 3, 4, 7];
const MapResult = arr.map((ar) => {
  return ar + 2;
});

//forEach method don't return anything after iterating over each element
//so return statement don't return anything

const forEachResult = arr.forEach((ar, i) => {
  //   return arr + 2; // undefined, becoz  it does not6 return any new array
  arr[i] = ar + 3; // It modifies the original array
});

console.log(MapResult); //[ 4, 7, 5, 6, 9 ]
console.log(forEachResult, arr); //undefined
