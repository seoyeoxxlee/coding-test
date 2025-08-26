const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

console.log(num1 >= num2 ? 1 : 0);
console.log(num1 > num2 ? 1 : 0);
console.log(num2 >= num1 ? 1 : 0);
console.log(num2 > num1 ? 1 : 0);
console.log(num1 === num2 ? 1 : 0);
console.log(num1 !== num2 ? 1 : 0);
