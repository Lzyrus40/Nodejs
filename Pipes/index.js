const fs=require("node:fs");
const zlib = require("node:zlib");

const readableStream = fs.createReadStream("from.txt",{encoding: "utf8",highWaterMark:2});

const gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(fs.createWriteStream("./to2.txt.gz"));

const writableStream = fs.createWriteStream("./to.txt");

readableStream.pipe(writableStream);