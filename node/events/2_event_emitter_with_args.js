const EventListener = require('events')
const emitter = new EventListener()

// Listener for the logger emitter

// option 1 to write the listener
emitter.addListener('logger', function (args) {
  // console.log(`Listener 1 ${args}`)
  console.log(`Listener 1`, args)
})

// option 2 to write the listener
emitter.on('logger', (args) => {
  // console.log(`Listener 2 ${args}`)
  console.log(`Listener 2`, args)
})

// Create an emitter to produce an event
// But we need a listener to register this event and perform an action.
// A listener needs to be executed before the emitter
emitter.emit('logger', {
  id: 1,
  url: 'https://www.google.com'
})
