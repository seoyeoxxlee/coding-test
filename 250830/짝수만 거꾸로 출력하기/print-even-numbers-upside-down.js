const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let str = "";
for (let i=n-1; i>=0; i--) {
    if (arr[i] % 2 === 0) str += arr[i] + " ";
}

console.log(str);
