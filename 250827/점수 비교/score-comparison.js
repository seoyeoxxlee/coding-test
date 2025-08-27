const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let arrA = input[0].split(" ");
let arrB = input[1].split(" ");

let mathA = Number(arrA[0]), engA = Number(arrA[1]);