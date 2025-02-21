/* 1. Write a function named makeTea that takes one
parameter, 'typeOfTea&, and returns a string like
'"Making green tea"' when called with '"green tea"'.
Store the result in a variable named 'teaOrder' . 
*/

function makeTea(typeOfTea) {
  //   return "mr." + typeOfTea;
  return `making ${typeOfTea}`;
  console.log(test);
}

let teaOrder = makeTea("lemon");
// console.log(teaOrder);

/* 2. Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmedOrder' that return a message like '"orderConfirmed for chai"'.
     call 'confirmedOrder'   from within 'orderTea'  and return the result.
*/
function orderTea(teaType) {
  function confirmedOrder() {
    return "orderConfirmed For Chai";
  }
  return confirmedOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

/*
    3. Write a Arrow function named 'calculateTotal' that take 2 parameter: 'price' and 'quantity'. the function should return the total cost mutliplying by the 'price' and 'quantity'.
        Store the result in a variable named 'totalCost'.
*/

function calc(price, quantity) {
  return price * quantity;
}

// overriding above function named 'calc'
function calc(price, quantity) {
  return price - quantity;
}

// Arrow functiopn
const calculateTotal = (price, quantity) => {
  return price * quantity;
};

// Aroow function without currlybresh
const calculateTotal2 = (price, quantity) => price * quantity;

// making and calling function at same time or a one time use function.
((price, quantity) => price * quantity)(35, 25);

let totalCost = calculateTotal(49, 3);

// console.log(totalCost);

/* 4. Write a function named 'processTeaOrder' that take another function 'makeTea' as a parameter and calls it with the argument '"earl grey"'.
  return the result of calling 'makeTea'
*/

function makeTea(typeOfTea) {
  // we are returning in tilled sign
  return `making ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
// console.log(order);

/* 
5. Write a function named ‘createTeaMaker®' that returns another function. The returned function should take one parameter, ‘teaType', and return a message like "Making green tea"'. 
Store the returned function in a variable named ‘teaMaker® and call it with ‘“green tea"'. 
*/
function creatTeaMaker() {
  return function (teaType) {
    return `making ${teaType}`;
  };
}

let teaMaker = creatTeaMaker();
let result = teaMaker("green tea");

console.log(result);

// 2nd usage
function createGetCTC() {
  const m = 12;
  const belowTax = 12000;

  return function (salary) {
    if (salary < belowTax) return m * salary;

    return m * salary - (m * salary) / 10;
  };
}

const getCTC = createGetCTC();

// console.log("getctc of 10k", getCTC(10000));
// console.log("getctc of 15k", getCTC(15000));
console.log("getctc of 15k", getCTC(20000));
