const fs = require("fs");

const a = "This is made by ahmed";

fs.writeFile("./made.txt", a, () => {
  console.log("Written");
});

console.log("I am first");
