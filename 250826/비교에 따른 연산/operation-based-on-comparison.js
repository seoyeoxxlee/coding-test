const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

if (num1 > num2) {
    console.log(num1 * num2);
} else {
    console.log(parseInt(num2 / num1));
}