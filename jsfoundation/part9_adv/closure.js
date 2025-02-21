function outer() {
  let counter = 0;
  return function () {
    let i = 0;
    while (i < 10) {
      counter++;
      i++;
    }
    return counter;
  };
}

let increas = outer();
console.log(increas());
