const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let num = Number(input);

if (num < 1000) {
    console.log("no");
} else if (num < 3000) {
    console.log("mask");
} else console.log("book");