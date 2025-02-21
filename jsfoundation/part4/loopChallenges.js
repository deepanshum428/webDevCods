/*1. write a while loop that calculate sum of all numbers from 1 to 5 and store the result in a variable name sum*/

// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// let countDown = [];
// let i = 5;
// while (i >= 1) {
//   countDown.push(i);
//   i--;
// }
// console.log(countDown);

// let collection = [];
// let tea;
// do {
//   tea = prompt(`Enter your favourite tea or type "Stop" to finish`);

//   if (tea !== "stop" && tea !== "Stop") {
//     collection.push(tea);
//   }
// } while (tea !== "stop" && tea !== "Stop");

// let total = 0;
// let i = 1;
// do {
//   total += i;
//   i++;
// } while (i <= 2);

// let multipliedNumber = [];
// let numbers = [2, 4, 6];

// for (let idx = 0; idx < numbers.length; idx++) {
//   // let takeNumber = numbers[idx] * 2;
//   // multipliedNumber.push(takeNumber);

//   multipliedNumber.push(numbers[idx] * 2);
// }
// console.log(multipliedNumber);

let cities = [
  "new york",
  "delhi",
  "mumbai",
  "karachi",
  "Lahore",
  "kolkata",
  "Indore",
  "pune",
];
let listCity = [];

for (let c = 0; c < cities.length; c++) {
  const element = cities[c];
  listCity.push(element);
}
console.log(listCity);
