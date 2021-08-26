//Modules in node
//CommonJS, every file is module(by default)
// Modules - Encapsulated Code (Only share minimum)
//Some Built-in modules: OS, PATH, FS, HTTP

// const john = 'john'
// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');
//If we didn't assign to variable it still invoke the function of module
require('./7-mind-grenade');
//console.log(data);
// console.log(names)

sayHi(names.john)
sayHi('susan')
sayHi(names.peter)