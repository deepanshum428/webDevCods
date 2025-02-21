// named export

const { default: multiply } = require("./mathOperationsM");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function mutliply(a, b) {
  return a * b;
}

module.exports = {
  add,
  subtract,
  multiply,
};
