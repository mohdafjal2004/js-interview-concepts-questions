// *Q1: What's the output?
const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj);

// *Q2: Create a function multiplyByTwo(obj) that multiplies all
//* numeric property values of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "My Nums",
  "hello bro" : "mast",
  age : 300

};


console.log(nums["hello bro"]);
multiplyByTwo(nums);

function multiplyByTwo(obj) {
  // First we loop through each property using for-in loop
  for ( let key in obj) {
    // At each property, we check whether property type is "⁡⁢⁣⁢number⁡"
    // or not using "typeOf" , if typeof === number than multiply by two
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

console.log(nums);

// * Q-3:  Whats the output of the following code ? ⁡⁢⁣⁢!Important⁡
const a = {};
const b = { key: "b" };
const c = { key2: "c" };

// When an object is converted into string using toString(), so
// by-default it returns "[𝗼𝗯𝗷𝗲𝗰𝘁 𝗢𝗯𝗷𝗲𝗰𝘁]"

// Here initially the object "a" was empty then we try to assign some value in it
// So we are just assigning object "b" and "c" as keys so internally "b" and "c" when passed as keys will be
// implicitly converted as string  " "[𝗼𝗯𝗷𝗲𝗰𝘁 𝗢𝗯𝗷𝗲𝗰𝘁]" " using toString() method

a[b] = 123;
 //Internally it can be seen as `𝗮["[𝗼𝗯𝗷𝗲𝗰𝘁 𝗢𝗯𝗷𝗲𝗰𝘁]"] = 𝟭𝟮𝟯`;
a[c] = 456; //Internally it can be seen as `𝗮["[𝗼𝗯𝗷𝗲𝗰𝘁 𝗢𝗯𝗷𝗲𝗰𝘁]"] = 𝟰𝟱𝟲`;
// So a[c] will overwrite a[b]
console.log(a);
