const cart = ["shoes", "bag", "dress"];

//We are nesting one callback function inside another
//we do not know how is createOrder() executed ? if executed
//then how it is executed,is it executing the proceedToPayment() multiple times
// so we cannot just rely on createOrder()
//callback function to simple handle proceedToPayment()

createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

//Promise
const promise = createOrder(cart);
//{data:undefined} <= currently this is state of promise object(pending state)
//After some time, this object will filled with the data when createOrder()
//is done creating the order

//A promise object can only resolved once either it is success or it is
//failure, and there only be three states : Pending,fulfilled,rejected

//Promise Objects are immutable,means whenever object is resolved
//then we can simply pass the data to another part of code
//without having to worry that someonecan mutate the data

//{data:orderDetails}
promise.then(function (orderId) {
 return proceedToPayment(orderId);//DO not forget to use "return" 
});
