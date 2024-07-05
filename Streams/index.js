const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", { encoding: "utf-8", highWaterMark: 2 });
const writableStream = fs.createWriteStream("./output.txt");

readableStream.on("data", (chunk) => {
    console.log(chunk);
    writableStream.write(chunk);
});

readableStream.on("end", () => {
    console.log("Reading completed.");
    writableStream.end();
});

writableStream.on("finish", () => {
    console.log("Writing completed.");
});
