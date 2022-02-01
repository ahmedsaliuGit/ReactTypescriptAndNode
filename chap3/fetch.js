import fetch from "node-fetch";

(async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");

  if (response.ok) {
    let res = await response.json();
    console.log(res);
  } else {
    console.log("Failed to get anything.");
  }
})();
