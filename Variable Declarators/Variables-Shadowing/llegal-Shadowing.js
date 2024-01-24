//Here we are shadowing "var" variable with "let"
//This shadowing is allowed: Means it is legal
{
  var x = 10;
  {
    let x = 20;
    console.log(x);
  }

  console.log(x);
}

//Illegal Shaodwing : Shadowing "let" variable with "var"
{
  let a = 40;
  {
    var a = 50;
    console.log(a); //!SyntaxError: Identifier 'a' is already declared,
  //  becoz here var is present globally and let is also present globally and
  //   re-decalring a 'let' variable is not allowed in same global scope
  }
  console.log(a);
}


