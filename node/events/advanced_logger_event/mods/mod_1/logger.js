const EventEmitter = require('events')

class Logger extends EventEmitter{
  log (message) {
    console.log('logging...')
    this.emit('messageLogged', {
      id: 1,
      url: 'www.google.com'
    })
  }
}

module.exports = Logger