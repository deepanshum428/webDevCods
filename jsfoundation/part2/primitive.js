let isActive = true;
let isReallyActive = new Boolean(true); // not recommend
// console.log(isReallyActive.valueOf());

//null and undefined

let firstName = null;
let lastName = undefined;
// console.log(firstName);
// console.log(lastName);

let String1 = "Deepanshu";
let String2 = "Malviya";
let GreetMessage = `Hello ${String1}`;
let sum = `sum is ${2 + 2}`;

// console.log(GreetMessage);
// console.log(sum);

let sm1 = Symbol("Deepesh");
let sm2 = Symbol("Deepesh");

console.log(sm1);
console.log(sm2);
console.log(sm1 == sm2);
