const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let res = [a, b, c];
res = res.sort((a, b) => a - b);

console.log(res[1]);