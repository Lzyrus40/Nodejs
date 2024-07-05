const EventEmitter = require("node:events");
class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.OrderNumber =0;
    }
    order(size,topping){
        this.OrderNumber++;
        this.emit("order",size,topping);
    }
    displayOrderNumber(){
        console.log(`Order Number ${this.OrderNumber}`);
    }
}
module.exports =PizzaShop;