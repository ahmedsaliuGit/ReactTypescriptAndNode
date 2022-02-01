const pronto = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I don complete");
    // reject("Oh! This failed");
  }, 500);
});

pronto
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => console.log(err));
