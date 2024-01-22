// Prototype / Prototypal Inheritance / Inheritance

//This file is dedicated to prototype
// let myName = "hitesh     ";
// console.log(myName.length);

//But I want this...
// console.log(myName.trueLength);

let myHeroes = ["Thor", "Iron-Main"];

let heroPower = {
  thor: "hammer",
  IronMan: "Fly",

  getIronManPower: function () {
    console.log(`Iron Man power is ${this.IronMan}`);
  },
};

Object.prototype.hitesh = function () {
  console.log("Hitesh is present in all objects");
};

heroPower.histesh();
