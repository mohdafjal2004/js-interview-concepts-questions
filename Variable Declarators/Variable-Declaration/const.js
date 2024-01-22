//𝗰𝗼𝗻𝘀𝘁
const a = 10;
console.log(a);

//Reassigning(Reinitialising) is not allowed in same scope or while shadowing
// a = 20;
// console.log(a)//It gives ⁡⁢⁣⁢error⁡ <= Assignment to constant variable.

//Redeclaring is not allowed in same-scope
{
  const a = 20;

  //   const a = 20;//It gives error
}

//Redeclaring is allowed while shadowing when using let variable
{
  const a = 10;
  {
    const a = 20;
    console.log(a);
  }
  console.log(a);
}


//Redeclaring a variable without proving any value
//is ⁡⁢⁣⁢not⁡ allowed while using "const" variable,it gives error
// let const;
