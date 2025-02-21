"use strict";

// let teas = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTea = [];

// console.log("Tea ", teas);

// for (let idx = 0; idx < teas.length; idx++) {
//   if ("chai" === teas[idx]) {
//     break;
//   }
//   selectedTea.push(teas[idx]);
// }
// console.log("selectedTea ", selectedTea);

// let cities = ["London", "New york", "paris", "Berlin"];
// let visitedCities = [];

// console.log(cities);

// for (let idx = 0; idx < cities.length; idx++) {
//   if ("paris" === cities[idx]) continue;
//   visitedCities.push(cities[idx]);
// }
// console.log(visitedCities);

// let numbers = [1, 2, 3, 4, 5];
// let smallNumber = [];

// for (const num of numbers) {
//   if (num === 4) {
//     break;
//   }
//   smallNumber.push(num);
// }
// console.log(smallNumber);

/*   

// understand difference between var and let
// let number;
// var string;

function ttq() {
  //   let string;
}

console.log(string);
// let string;
var string;
string = "sdfsdf";
// ttq();
console.log(string);    

*/

// let teaTypes = ["chai", "greenaTea", "herbalTea", "blackTea"];
// let preferredTeas = [];

// for (const tea of teaTypes) {
//   if (tea === "herbalTea") {
//     continue;
//   }
//   preferredTeas.push(tea);
// }
// console.log(preferredTeas);

// let citiesPopulation = {
//   London: 89000000,
//   Newyork: 5600000,
//   Paris: 5400000,
//   Berlin: 7600000,
// };

// let cityNewPopulation = {};
// console.log(Object.values(citiesPopulation));
// console.log(Object.keys(citiesPopulation));

// for (const city in citiesPopulation) {
//   if (city == "Berlin") {
//     break;
//   }
//   cityNewPopulation[city] = citiesPopulation[city];
// }

// console.log(Object.keys(cityNewPopulation));
// console.log(Object.values(cityNewPopulation));

// let worldCities = {
//   Sydney: 5000000,
//   Tokyo: 9000000,
//   Berlin: 3500000,
//   Paris: 2200000,
// };

// let largeCities = {};

// for (const city in worldCities) {
//   if (worldCities[city] < 3000000) {
//     continue;
//   }
//   largeCities[city] = worldCities[city];
// }
// console.log(Object.keys(largeCities));
// console.log(Object.values(largeCities));

/* 7. write an 'forEach' loop that itrate through the array '["earl grey", "green tea", "tea", "ooloong tea"]' stop the loop when "chai" is found, and and store all previous tea type in an array named 'availableTea'. */

// let teaCollection = ["earl grey", "green tea", "chai", "ooloong tea"];

// let availableTeas = [];

// teaCollection.forEach(function (tea) {
//   if (tea === "chai") {
//     return;
//   }
//   availableTeas.push(tea);
// });
// console.log(availableTeas);

/* 8. write an 'forEach' loop that itrate through the array '["Berlin", "Tokyo", "Sydney", "Paris"]'. 
Skip '"Sydney"' and store the other cities in a new array named 'traveledCities'. */

// let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];

// let traveledCities = [];

// cities.forEach(function (city) {
//   if (city === "Sydney") {
//     return;
//   }
//   traveledCities.push(city);
// });
// console.log(traveledCities);

/* 9. Write a 'for' loop that itrate through the array '[2, 5, 7, 9]'.skip the value 7 and multiply rest by 2. Store the result in a new array named 'doubledNumbers'.  */

// let numbers = [2, 5, 7, 9];

// let doubledNumbers = [];

// for (let idx = 0; idx < numbers.length; idx++) {
//   if (numbers[idx] == 7) {
//     continue;
//   }
//   doubledNumbers.push(numbers[idx] * 2);
// }
// console.log(doubledNumbers);

/*
 10. use a 'for of' loop to iterate through the array '["chai", "green tea", "black tea", "jasmin tea", "herbal tea"]'
            and stop when  length of the current tea name is greater than 10.
            store the teas iterated over in an array named 'shortTeas'.
*/

let teas = ["chai", "green tea", "black tea", "jasmin tea", "herbal tea"];

let shortTeas = [];

for (const tea in teas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(teas[tea]);
}
console.log(shortTeas);
