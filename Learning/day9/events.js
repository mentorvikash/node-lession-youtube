const eventEmmiter = require("node:events");

const emitter = new eventEmmiter();

emitter.on("bake-pizza", (size, topping) => {
  console.log(
    `your pizza with ${topping} and ${size} size will be ready in 5 min`
  );
});

emitter.on("bake-pizza", (size) => {
  if (size === "large") {
    console.log(`hay you got a drink for free`);
  }
});

console.log("this is the 1st command that shuld render first");

emitter.emit("bake-pizza", "large", "masroome");
