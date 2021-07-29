const { Socket } = require('dgram');
const http = require('http');

// create webserver; http is a EventEmitter type
const server = http.createServer()

// Register listner/ handler to take action on the event
server.on('connection',  (socket) => {
 console.log('new connection')
})

// listner created
server.listen(3000)

console.log('listening 3000')


