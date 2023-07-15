const path = require('node:path')

// path module
console.log(__dirname)
console.log(__filename)
console.log( path.basename( __dirname))
console.log(path.basename(__filename))

console.log( "dirname1", path.dirname( __dirname))
console.log("dirname2", path.dirname(__filename))

console.log( "extname1", path.extname( __dirname))
console.log("extname2", path.extname(__filename))

// will destructure and change into object 
console.log("pathObject", path.parse(__filename))

// will combine and give original path
console.log("path", path.format( path.parse(__filename)))

// if absolute path
console.log("isAbsolute1", path.isAbsolute(__filename))
console.log("isAbsolute2", path.isAbsolute("./data.json"))
