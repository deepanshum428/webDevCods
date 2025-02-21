const person = {
  name: "Deepanshu",
  greet() {
    console.log(`hi i am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundgreet = person.greet.bind({ name: "jhon banega don " });
boundgreet();
