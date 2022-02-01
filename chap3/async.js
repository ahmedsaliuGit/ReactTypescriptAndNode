async function delayedResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I don complete");
    }, 500);
  });
}

(async function execFunc() {
  let result = await delayedResult();
  console.log(result);
})();
