function Person(name, age) {
  this.name = name;
  this.age = age;
}

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

// let myCar = ;
console.log(new Car("Toyota", "Camry"));

let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("error created by deepanshu...");
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");
