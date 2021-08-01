const EventEmitter = require('events')
const emitter = new EventEmitter() // No longer needed as we extend from EventEmitter

function log(message) {
  console.log(message)
  emitter.emit('messageLogger', {
    id: 2,
    url: 'https://www.google.com'
  })
}

module.exports = log;
 