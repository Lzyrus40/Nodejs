// require('./math');
// const add=require('./math');
// console.log("Addition:",add.add(4,5));
// console.log("Subtraction:",add.sub(7,3));

// const {add,sub}=require('./math');
// console.log("Addition:",add(4,5));
// console.log("Subtraction:",sub(7,3));

// IIFE (Initially invoked function expression)
// (function(exports, require, module,__filename, __dirname){})()
    

const{addition,subtract}=require('./math');
console.log("Addition:",addition(4,5));
console.log("Subtraction:",subtract(7,3));
