const buffer = new Buffer.from("love");

buffer.write("Khandelwal");
console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());