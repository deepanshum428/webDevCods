let computer = {
  cpu: 12,
  ram: 8,
};

let lenovo = {
  screen: "HD",
  //   __proto__: computer,
};

let tomHardware = {};

// console.log(`lenovo`, lenovo.__proto__);

let genericCar = { tyre: 4 };

let tesla = { driver: "Al" };

Object.setPrototypeOf(tesla, genericCar);

let get = Object.getPrototypeOf(tesla);
console.log(`tesla`, get);
