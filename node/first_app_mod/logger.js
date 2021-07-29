const EventEmitter = require('events')

class Logger extends EventEmitter {
  log(message) {
    console.log(message)

   this.emit('emitMessage', {
    id: 2,
    url: 'https://www.google.com'
   })
  }
}

module.exports = Logger;
 