//! Using "this" keyword for accessing property of parent object

// *Ex-1 : A Regular function which is simply accessing all the properties
//* of parent object
let user = {
  name: "Mohd Afjal",
  age: 23,
  getDetails() {
    console.log(this);
    //{ 𝗻𝗮𝗺𝗲: '𝗠𝗼𝗵𝗱 𝗔𝗳𝗷𝗮𝗹', 𝗮𝗴𝗲: 𝟮𝟯, 𝗴𝗲𝘁𝗗𝗲𝘁𝗮𝗶𝗹𝘀: [𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻: 𝗴𝗲𝘁𝗗𝗲𝘁𝗮𝗶𝗹𝘀] }
    //becoz here "this" is all complete properties of parent object
    //in which this function is created

    console.log(this.name);
    // 𝗠𝗼𝗵𝗱 𝗔𝗳𝗷𝗮𝗹, "this" is targeting all properties of parent object
    //and using dot to access a specific property
  },
};
// user.getDetails();

// * Ex-2 : Inside Parent object, creating child object which contains its
// * own properties and a regular function which can access parent object properties

var user2 = {
  name: "Mohd Afjal",
  age: 23,
  childObj: {
    newName: "Sonu",
    getDetails() {
      console.log(this.newName, "and", this.name);
      //   Sonu and undefined
      //! So "this" can only access properties of immediate parent object,
      //! and cannot the properties of super parent object
    },
  },
};

user2.childObj.getDetails();

// * Ex-3 : Using "this" keyword inside a arrow function for accessing
// * the properties of parent object

let user3 = {
  name: "Mohd Afjal",
  age: 23,
  getDetails: () => {
    console.log(this); //Becoz here in arrow function "this" keyword
    //directly target the global scope object
  },
};
user3.getDetails(); // {}

// * So to access the properties of parent object using arrow function
// * first we create a regular function which can easily access the
// * properties of parent object and in that regular function we
// * create an arrow function

let user4 = {
  name: "Mohd Afjal",
  age: 23,
  getDetails() {
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },
};
user4.getDetails();//Mohd Afjal
