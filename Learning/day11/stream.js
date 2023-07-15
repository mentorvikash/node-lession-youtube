const fs = require("node:fs");

const readStream = fs.createReadStream("newfile.txt", {
  encoding: "utf8",
  highWaterMark: 3,
});

const writeStream = fs.createWriteStream("newfilecopy.txt");

readStream.on("data", (chunks) => {
  console.log(chunks);
  writeStream.write(chunks);
});
