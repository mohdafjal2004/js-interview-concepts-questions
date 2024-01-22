
//This file is basically dedicated to objects and new keyword

function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5)); //Means function is an function
console.log(multiplyBy5.power); //Means Function is also an object
console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

//Injecting method inside function(treating like object here)
createUser.prototype.increment = function () {
  //? score++; //Here it will get confused to increase the score of which
  //becoz it do not have context of who has called
  //Like mother and father calling at the same time, now to go where?
  //Here "this" means "जिस" , Means जिसने भी बुलाया है , उसका काम  करदो
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

// const chai =  createUser("Chai", 25);
//Error : chai.printMe();
//TypeError: Cannot read properties of undefined (reading 'printMe')

//अभी तक सब हवा में था अब जब ये new keyword लगाया तब उसने सब कुछ assemble
//किया, new ने  एक object लिया उसमे एक protoype inject करा, फिर new ने 
// कुछ Method define करा

//Thats why we use new keyword
const chai = new createUser("Chai", 25);
const tea = new createUser("tea", 250);

//Internally it will add prototype here
chai.printMe();

//Newly created object gets linked to the prototype property of the
//constructor function.
