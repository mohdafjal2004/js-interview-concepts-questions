//𝗹𝗲𝘁
let a = 10;
console.log(a);

//reassigning is allowed when using let variable
a = 20;
console.log(a);

//Re-declaring is not allowed when using let variable
//in the 𝘀𝗮𝗺𝗲-𝘀𝗰𝗼𝗽𝗲
// let a = 20; // <= It gives ⁡⁢⁣⁢error⁡

//Re-declaring is allowed while shadowing when using let variable
{
  let a = 10;
  {
    let a = 20;
    console.log(a);
  }
  console.log(a);
}

//Redeclaring a variable without providing any value
//is allowed while using "let" variable
let x;

