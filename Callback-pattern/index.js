function greet(name){
    console.log(`Hello ${name}`);
}
function greetlove(greetfn){
    const name="love";
    greetfn(name);
}
greetlove(greet);