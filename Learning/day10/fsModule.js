const fs = require("node:fs");

// without specify content type show data in buffer
// const content = fs.readFileSync("./secret.txt");

console.log("block 1");

// with utf8 encoding show data in real format
const content = fs.readFileSync("./secret.txt", "utf-8");
console.log("first sync", content);

console.log("block 2");

// error first callback pattern
fs.readFile("./secret.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("second async", data);
  }
});

console.log("block 3");

fs.writeFileSync("newfile.txt", "I am just willling to add this");
const readNewFile = fs.readFileSync("newfile.txt", "utf-8");
fs.writeFile("newfile.txt", "update the existing file", (error) => {
  if (error) {
    console.log(error);
  }
});
console.log("readNewFile", readNewFile);

// do a last check to check if the file update was successful
fs.readFile("newfile.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("last sync", data);
  }
});

// id willing to add new file insted to replacy use flag a for appending

fs.writeFile(
  "newfile.txt",
  " just append to existing file",
  { flag: "a" },
  (error) => {
    if (error) {
      console.log(error);
    }
  }
);

fs.readFile("newfile.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("last sync", data);
  }
});
