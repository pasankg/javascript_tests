const Logger = require('./logger');
const fs = require('fs')

console.log(Logger)
const logger  = new Logger()
logger.log('hello')

// Synchronus func do not need a callback
console.log(fs.readdirSync('.'))

// Asynchronus functions needs a callback
fs.readdir('./',{},function(err,files){
    if(err) console.log(`Error ${err}`)
    else console.log(`Files ${files}`)
})