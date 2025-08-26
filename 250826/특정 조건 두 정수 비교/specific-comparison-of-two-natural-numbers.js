const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let res1, res2;

if (num1 < num2) {
    res1 = 1;
} else res1 = 0;

if (num1 === num2) {
    res2 = 1;
} else res2 = 0;

console.log(res1, res2);