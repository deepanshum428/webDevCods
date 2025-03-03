const API_URL = "https://ca94ba984e20987a3f26.free.beeceptor.com/api/users/";

// await can only be used inside an asynce function

async function handlePromise() {
  const response = await fetch(API_URL);
  //   const response = await fetch(API_URL, {
  //     method: "post",
  //     body: JSON.stringify({ message: "demo" }),
  //   });

  // TODO: learn about http status code and message
  if (!response.ok) {
    throw new Error("Not found!");
  }

  const data = await response.json();

  console.log(data);
}
handlePromise();
