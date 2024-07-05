const fs = require('node:fs');

console.log('first');
//readFile is asynchronous so console.log("data") executes after the execution of console.log("second")
fs.readFile("./file.txt",'utf8', function(err, data) {
    console.log("data");
});
console.log('second');