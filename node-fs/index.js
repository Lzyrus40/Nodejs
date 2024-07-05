const fs = require('node:fs');

console.log("first");
//Reading the file synchronously
const filedata = fs.readFileSync("./file.txt", "utf-8");
console.log(filedata);

console.log("second");
//Reading the file asynchronously
fs.readFile("./file.txt","utf-8", (error, data) => {
    if (!error) {
        console.log(data);
    }else{
        console.log(`Error: ${error}`);
    }
})
console.log("third");
//Writing file data synchronously
fs.writeFileSync("./data.txt","this is data.txt");

//Writing file data asynchronously
fs.writeFile("./data.txt","this should be file data.", (error, data) => {
    if(error){
        console.log(error.message);
    }else{
        console.log("Success");
    }
});

//appending file data asynchronously
//flag:"a" is for appending new content to previous content 
fs.writeFile("./data.txt","append",{flag:"a"}, (error, data) => {
    if(error){
        console.log(error.message);
    }else{
        console.log("Success");
    }
});