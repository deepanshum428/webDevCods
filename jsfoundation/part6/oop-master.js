let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("Jhon doe", 20);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.hitesh = function name(params) {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.hitesh());
let myNewArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(myNewArray.hitesh());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  #pvtVar = "Sdf";

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  driver() {
    return `${this.make} : This is inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.driver());

let vehOne = new Vehicle("Toyota", "Corolla");
// console.log(vehOne.make);

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }

  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }
  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

// console.log(myMachine.pressStartButton());

// polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `penguin can't fly...`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

// static

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
// let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3));

// console.log(Calculator.add(2, 3));

// getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#salary = value;
    }
  }
}
let emp = new Employee("Alice", 50000);
emp.salary = 90;
// console.log(emp.salary);
