// in js functions are first class functions
// functions can be passed as arguments
// functions can be returned from functions

// Callback function any function which passed as an argument to a function is called callback function.
// Higher Order function - A function accepts a function as an argument and returns a function.

// callback function
function greet(name) {
    console.log(`Hello ${name}`)
}

// Higher Order function
function higherOrderFunction(callback){
    const name = "revive coding"
    callback(name)
}

higherOrderFunction(greet)


// Synchronous callbacks - callbacks get executed as passed to function 
const arr = [12,25,48,45,17]
arr.map(num => num +1)
arr.filter(num => num > 40)
arr.sort((a,b) => a - b)

// Asynchronous callbacks - a callback often used to continue or resume code execution once asynchronous action completed
// it delay the execution them some particular event occours
 