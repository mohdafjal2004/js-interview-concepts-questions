const cart = ["shoes", "bag", "dress"];

const promise = createOrder(cart);

//consuming part
promise.then(function (orderId) {
  proceedToPayment(orderId);
});

function proceedToPayment(orderId) {
  console.log(orderId);
}

//creation part
function createOrder() {
  const pr = new Promise((resolve, reject) => {
    //createOrder
    //validate the cart
    //orderId
    if (!validateCard(cart)) {
      reject(new Error("Cart is not valid"));
    } else {
      //logic of createOrder
      const orderId = "12345";
      if (orderId) {
        resolve(orderId);
      }
    }
  });

  return pr;
}

function validateCard() {
  return true;
}
