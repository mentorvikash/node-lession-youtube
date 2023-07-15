// require("./events");
const pizzashop = require("./moduleEmmiter");

const newShop = new pizzashop();

newShop.on("bake-pizza", (size, topping) => {
  console.log(
    `your pizza with ${topping} and ${size} size will be ready in 5 min`
  );
});

newShop.on("bake-pizza", (size) => {
  if (size === "large") {
    console.log(`hay you got a drink for free`);
  }
});

newShop.orderPizza("large", "masrooms");
newShop.dispalyOrderNumber();
newShop.orderPizza("medium", "onions");
newShop.dispalyOrderNumber();
newShop.cancelPizza();
newShop.dispalyOrderNumber();
