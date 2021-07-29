// Classes in JS
class Biker {
 constructor(bikerName, bikeModel) {
  this.bikerName = bikerName;
  this.BikeModel = bikeModel
 }
}
let biker = new Biker('Triumph','Tiger');
console.log(biker)

// Closure example
function language(lang)  {
 return function me(name) {
  if(lang==='en'){
   console.log(`I'm ${name}`)
  }
  if(lang==='fr'){
   console.log(`Je suis ${name}`)
  }
 }
}

let me = language('fr')

// `me` function along with it's lexical scope (language()) bundled together forms a closure
me('John')
// output will be Je suis John
