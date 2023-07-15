// =================== oject ref and es6 exports

require('./Learning/day5/object-reference')

// ===================== differnt type of exports

// const calMethod = require("./Learning/day4-export-type/user");

// console.log(calMethod.add(2,5))
// console.log(calMethod.subtract(2,5))

// const {add, subtract} = calMethod

// console.log(add(2,5))
// console.log(subtract(2,5))

// ======================= with out catching

// const superhero = require("./Learning/day3-module-caching/superhero");
// const newHero = new superhero()
// console.log(newHero.getName());
// newHero.setName("spiderman");
// console.log(newHero.getName());

// const superhero2 = require("./Learning/day3-module-caching/superhero");
// const newHero2 = new superhero2()
// console.log(newHero2.setName("kala man"));
// console.log(newHero2.getName());

//  ======================= with catching

// const superhero = require("./Learning/day3-module-caching/superhero");
// console.log(superhero.getName());
// superhero.setName("spiderman");
// console.log(superhero.getName());

// const newHero = require("./Learning/day3-module-caching/superhero");

// console.log(newHero.getName());

// ===============

// const express = require("express");
// const app = express();
// require("./Learning/day1/add");
// const add = require("./Learning/day1/add");

// console.log("2nd add", add(4, 17));
// app.get("/", (req, res, next) => {
//   res.send("server is working...");
// });

// app.listen("3000", () => {
//   console.log("live on 3000......");
// });
