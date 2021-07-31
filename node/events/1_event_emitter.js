// Classes are always starts in caps
const EventEmitter = require('events')
// Creates an object of the event emitter class
const emitter = new EventEmitter();

// Create an emitter - emitter sends a signal when an event has happened.
// But an emitter needs to be created after the listener, otherwise the emitted event will not be captured.
// So we add below line at the end
// emitter.emit('messageLogged')

// Register a listener - Listener is a function that will be called when a specific event is raised.
// In this case it is messageLogged
// But the listener needs to be created before the emitter.

// Option 1
emitter.addListener('messageLogged', () => {
  console.log('messageLogged listener called once')
})

// Option 2, use the alias of addListener which is `on`
emitter.on(`messageLogged`, () => {
  console.log('messageLogged listener called twice')
})

emitter.emit('messageLogged')