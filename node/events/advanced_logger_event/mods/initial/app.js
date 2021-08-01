const EventEmitter = require('events')
const emitter = new EventEmitter();

emitter.on('messageLogger', (args) => {
  console.log(`Listener called`, args)
})

const logger = require('./logger');

// Below invoke will not trigger the event listener.
// This is because it creates a new emitter object each time.
logger('hello')



