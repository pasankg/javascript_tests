// Immediately invoked function expression (IIFE)
// Node does not execute the code directly.
// It always wraps its the code inside of below local function.
// This function is called Module Wrapper Function
// exports is a shortcut/reference to module.exports.
// We cannot change that reference hence we cannot assign it to any value directly.
// module.exports = log is - correct
// module.exports.log = log - correct
// exports = log - wrong
(function (exports, require, module, __filename, __dirname) {

})


// To prove this;
console.log(__filename)
console.log(__dirname)
console.log(exports)
console.log(require)
console.log(module)