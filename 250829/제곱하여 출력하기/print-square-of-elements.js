const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
const arr = input[1].trim().split(/\s+/).map(Number);
const answer = [];

for (let i=0; i<n; i++) {
    answer.push(Math.pow(arr[i], 2));
}

console.log(answer.join(" "));