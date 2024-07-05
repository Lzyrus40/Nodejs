// Pattern 1st of exporting
// const add=(a,b)=>{
//     return a + b;
// }
// module.exports =add;


//  Pattern 2nd of exporting
// module.exports =(a,b)=>{
//     return a + b;
// }


// Pattern 3rd of exporting
// const addition = (a, b) => {
//     return a + b;
// };
// const subtract = (a, b) => {
//     return a - b;
// };
// module.exports = { add: addition, sub: subtract };

// Pattern 4th of exporting
// const addition = (a, b) => {
//     return a + b;
// };
// const subtract = (a, b) => {
//     return a - b;
// };
// module.exports = {addition,subtract};

// Pattern 5th of exporting
exports.addition = (a, b) => {
    return a + b;
};
exports.subtract = (a, b) => {
    return a - b;
};