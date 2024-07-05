const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on("order", () => {
    console.log("Ordered");
});

emitter.emit("order");
