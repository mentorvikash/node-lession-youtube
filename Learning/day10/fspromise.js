const fs = require("node:fs/promises");

console.log("1st block");

// node build in async promise to work with files data
fs.readFile("newfile.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

console.log("2nd block");

// create a asycn fucntion and handle api call without using promise structure

const readFileAsycFunction = async () => {
  try {
    const data = await fs.readFile("newfile.txt", "utf-8");
    console.log("data", data);
  } catch (error) {
    console.log(error.message);
  }
};

readFileAsycFunction();
