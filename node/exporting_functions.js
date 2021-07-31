var log = function message(message) {
  console.log(message)
}

function message(message) {
  console.log(`updated ${message}`)
}

log('hi')  //hi
console.log(log) // [Function: message]

module.exports.logger = log;
module.exports.msg = message;