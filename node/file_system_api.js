const fs = require('fs')

// Synchronous func do not need a callback
console.log(fs.readdirSync('.'))

// Asynchronous functions needs a callback
fs.readdir('./', {}, function (err, files) {
  if (err) console.log(`Error ${err}`)
  else console.log(`Files ${files}`)
})