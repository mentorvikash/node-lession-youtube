const EventEmitter = require("node:events");

class przzaShop extends EventEmitter {
  constructor() {
    super();
    this.count = 0;
  }

  orderPizza = (size, topping) => {
    this.count++;
    this.emit("bake-pizza", size, topping);
  };

  cancelPizza = () => {
    this.count--;
  };

  dispalyOrderNumber = () => {
    console.log(`currently we have ${this.count} orders`);
  };
}

module.exports = przzaShop;
