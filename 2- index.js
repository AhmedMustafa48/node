const fs = require("fs");

const a = fs.readFileSync("./sample.txt", "utf-8");
console.log(a)
console.log("I am second")

// if we call it 10 times , then code look like messy /


// const a = fs.readFileSync("./sample.txt", "utf-8");
// const a = fs.readFileSync("./sample.txt", "utf-8");
// const a = fs.readFileSync("./sample.txt", "utf-8");
// const a = fs.readFileSync("./sample.txt", "utf-8");
// const a = fs.readFileSync("./sample.txt", "utf-8");
// const a = fs.readFileSync("./sample.txt", "utf-8");
// const a = fs.readFileSync("./sample.txt", "utf-8");
// const a = fs.readFileSync("./sample.txt", "utf-8");
// const a = fs.readFileSync("./sample.txt", "utf-8");
// const a = fs.readFileSync("./sample.txt", "utf-8");

// to avoid this import 

// const {readFileSync} = require("fs");

// const a = readFileSync("./sample.txt", "utf-8");
// const a = readFileSync("./sample.txt", "utf-8");
// const a = readFileSync("./sample.txt", "utf-8");
// const a = readFileSync("./sample.txt", "utf-8");
