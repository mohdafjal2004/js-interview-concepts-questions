//Nesting of a Promise object inside Promise object

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Brand ${username}`);
    }, 1000);
  });
}

function winTheWorld(action) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(` ${action} this world`);
    }, 1000);
  });
}

// ⁡⁣⁢⁢Nesting of Promises⁡
// We want that when importantAction() is resolved then only
//winTheWorld() function should be called
importantAction("Mohd Afjal")
  .then((res) => {
    console.log(res);
    // 𝗡𝗲𝘀𝘁𝗶𝗻𝗴 a returned Promise object(of winTheWorld() function)
    // inside another importantAction() function so when the
    // importantAction() is resolved then only the returned Promise
    // object(of winTheWorld(action) function)  should be resolved
    winTheWorld("Do it now win")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// ! ⁡⁣⁢⁢𝗣𝗿𝗼𝗺𝗶𝘀𝗲𝘀 𝗖𝗵𝗮𝗶𝗻𝗶𝗻𝗴(Imp)⁡ :To aviod the pyramid structure of Promises Nesting

importantAction("Sonu ")
  .then((res) => {
    console.log(res); //Resolving only importantAction()
    return winTheWorld("Do it now with heart win"); //for resolving this
    //object ,chain another .then()
  })
  .then((res) => {
    console.log(res); //Resolving the winTheWorld()
    //Here we can even resolve another promise inside this ".then()"
    //which will only be resolved when winTheWorld() is resolved
  });

//   * Another resolving Promises is Promises Combinator in Basics5Promises
