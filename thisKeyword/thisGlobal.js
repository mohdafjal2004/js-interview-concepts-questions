// Basics of "this" keyword

//!Using "this" keyword for accessing global scope property

//* Accessing "this" keyword property in global scope
this.a = 5;
console.log(this);
//Output : { a: 5 }, becoz here "this" is targeting global scope object

console.log(this.a);
//Output : 5, since "this" is targeting the complete global scope object
//so inside that object, we use dot to access its property globally

//*Accessing "this" keyword property in normal Regular function
this.b = 6;
function getParam() {
  console.log(this.b);
  //Here also "this" is targeting complete global scope object
  //so inside that object, we use dot to access its property inside function
}
getParam();

//* Accessing "this" keyword property  in arrow function
this.c = 7;
const getParam2 = () => {
  console.log(this.c);
  //Here also "this" is targeting complete global scope object so inside
  // that object, we use dot to access its property inside arrow function
};
getParam2();
