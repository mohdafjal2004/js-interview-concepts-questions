//Here we will loop through the object properties key and access the name
// of that key or value of that key

const user = {
  name: "Mohd Afjal",
  age: 23,
  isTotallyAwesome: true,
};

// For looping through the keys, we use for-in loop
for ( key in user) {
  console.log(key)
    console.log(user[key])
}
