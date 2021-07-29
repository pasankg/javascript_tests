
var a = 100;
console.log(a);  //100

console.log(global.a) // undefined

var b = function(message) {
 console.log(message)
}

console.log(b) //[Function: b]
b('hi')  //hi
