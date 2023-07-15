const obj1 = {
    name: "kiran"
}

let obj2 = obj1 

// Act as module.exports
// obj2.name = "neha"
// console.log(obj1.name)  // giving neha

// Act as exports
obj2 = {
name: "kaaaluuu"
} 

console.log(obj1)  // giving kiran
