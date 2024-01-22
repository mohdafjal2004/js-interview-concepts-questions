//Paramter vs Argument in dynamic function

//When defining a function, values we receive are parameters
function square(num) {
  console.log(num * num);
}

//While calling that dynamic function, what we pass is argument
square(4);

// Example-1 of using Spread Operator as argument
function multiply1(num1, num2) {
  console.log(num1 * num2);
}

var arr = [5, 6];

//Using the spread Operator,this operator will spread array values
multiply1(...arr);

// Example-2 of using Spread Operator as argument and rest operator as parameter

//Using the rest operator as parameter
function multiply2(...nums) {
  console.log(nums);
}

var arr = [5, 6];

//Using the spread Operator as argument,
// this operator will spread and pass array values
multiply2(...arr);

//*Output Based Questions

// Q1 : 𝗣𝗮𝘀𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗿𝗲𝘀𝘁 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿 𝗶𝗻 𝗯𝗲𝘁𝘄𝗲𝗲𝗻
// const fn = (a,...numbers,x,y) => {
//     console.log(x,y)
// }
//  This above code  will give error
// becoz we always have to put the spread operator and rest operator at last

// fn(5, 6, 3, 7);

// 𝗤𝟮 : 𝗣𝗮𝘀𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗿𝗲𝘀𝘁 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿 𝗮𝘁 𝗹𝗮𝘀𝘁
const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};
fn(5, 6, 3, 7, 7, 8, 9);

//So always remember to use spread operator and rest operator at last in ()
// of argument and parameter respectively
