import fs from "fs/promises";

// fs.writeFile("text.txt", "Hello world!", () => {
//   fs.readFile("text.txt", "utf8", (err, msg) => {
//     console.log(msg);
//   });
// });

(async function () {
  await fs.writeFile("text-promise.txt", "Hello promise!");
  const txt = await fs.readFile("text-promise.txt", "utf-8");
  console.log(txt);
})();
