function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let deepanshu = new Person("Deepanshu");
deepanshu.greet();
