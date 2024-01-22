const user = {
  username: "Afjal",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage(); //Output : Afjal , welcome to website
// Here we change  current context value
// user.username = "Sonu";
// user.welcomeMessage(); //Output : Sonu , welcome to website
// console.log(this); // Output : {}

function chai() {
  console.log(this);
}
// chai(); //Output :  So manu values

function coffee() {
  const username = "Mohd Afjal";
  console.log(this.username);
}

// coffee();

const roti = () => {
  const username = "Mohd Afjal"; 
  console.log(this);
};
roti();//Output : {} , becoz arrow function does not own "this" context.
//  Instead, they capture the this value from their surrounding lexical
// context (i.e., the context in which they are defined) and retain it.
