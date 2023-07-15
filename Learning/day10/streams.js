// sream is the sequence of data that id moved from one place to another place overtime.
// data transferred in chunks insted of all at a time.
// prevent unnecessary data downloading or memory consumption
// Buffers focus to the right time to send new data, as previous data transfer done.

const buffer = new Buffer.from("revive coding");

console.log(buffer); // row binary data display as number when log to console but it is binary in background but console in hexadecimal
console.log(buffer.toJSON());
console.log(buffer.toString()); // back to original

// console.log(JSON.stringify(buffer));
