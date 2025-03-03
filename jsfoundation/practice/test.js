const p1 = new Promise((resolve, reject) => {
  console.log("p1 started");
  setTimeout(() => {
    resolve("Promise Resolved value!! ");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  console.log("p2 started");
  setTimeout(() => {
    resolve("Promise Resolved value!! ");
  }, 10000);
});

async function handlePromise() {
  console.log("Hello world");

  const val1 = await p1;
  console.log("Namsate javaScript1");
  console.log(val1);

  const val2 = await p2;
  console.log("Namaste javaScript2");
  console.log(val2);
}

handlePromise();
