const EventListner = require('events')
const emitter = new EventListner()

// Listner for the logger emitter

// option 1 to write the listner
emitter.addListener('logger',function(args){
 // console.log(`Listner 1 ${args}`)
 console.log(`Listner 1`, args)
})

// option 2 to write the listner
emitter.on('logger',(args)=>{
 // console.log(`Listner 2 ${args}`) 
 console.log(`Listner 2`, args)
})


//Create an emitter to produce an event
// But we need a listner to register this event and perform an action.
// A listner needs to be executed before the emitter
emitter.emit('logger', {
 id: 1,
 url: 'https://'
})
