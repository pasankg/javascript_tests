var log = function message(message){
 console.log(message)
}

function message(message){
 console.log(`updated ${message}`)
}

log('hi')
console.log(log)

module.exports.logger = log;
module.exports.msg = message;