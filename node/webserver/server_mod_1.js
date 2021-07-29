const http = require('http')

// Can use normal function syntax
/*
const server = http.createServer(function(req,res){
   code goes here
});
*/

// Or arrow function

const server = http.createServer((req,res) => {
 if(req.url == '/') {
  res.write('hello');
  res.end()
 }
});

server.listen(3000)

console.log('listening')