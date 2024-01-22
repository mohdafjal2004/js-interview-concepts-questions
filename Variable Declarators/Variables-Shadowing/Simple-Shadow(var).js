{
  var a = 10;
  {
    var a = 20;
    console.log(a);
  }
  console.log(a);
}
//Both logs gives 20 becoz var is function-scoped variable , so here it is not limited to block-scope
// so if a variable is declared using var outside any function then it is present globally
//and any changes made to global variable while shadowing
//Will ultimately changes its value globally
