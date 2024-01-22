let arr = ["arr", "Aditiya"];

let object = {
  name: "Afjal",
  city: "Nawalgarh",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

//How are we able to access the methods like Object.keys, Object.length
//and Object.create? => Using prototype object which contains these methods
// and properties and this prototype objects is being attached
// to our original object

//Same way we can access the methods  and properties
//of one object into another object
let object2 = {
  name: "Sonu",
}; 

//Here we are attaching the object to object2 using prototype object
object2.__proto__ = object;
console.log(object2.city);
//So here object2 is inhereting proprties and method of object

console.log(object2.getIntro())