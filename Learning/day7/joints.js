// const path = require("node:path"); // can use any one
const path = require("path");


// console.log(path.join('ram', 'kamal'))
// console.log(path.join('ram', '/kamal', 'book'))
// console.log(path.join('/ram', '/kamal', 'book'))
// console.log(path.join('ram', '/kamal', '../book')) //  => ram/book
// console.log(path.join( __dirname, '/kamal', '/book')) //  => add dirname

// if slash not present add __dirname as root path else start from slash

console.log(path.resolve("ram", "kamal"));
console.log(path.resolve("ram", "/kamal", "book"));
console.log(path.resolve("/ram", "/kamal", "book"));
console.log(path.resolve("ram", "/kamal", "../book")); //  => ram/book
console.log(path.resolve(__dirname, "/kamal", "/book")); //  => add dirname
