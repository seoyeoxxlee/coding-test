const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

const arr = [];
arr.push(a, b);

for (let i=0; i<10; i++) {
    arr.push((arr[i] + arr[i+1]) % 10);
}

let str = "";
for (let i=0; i<10; i++) {
    str += arr[i] + " ";
}

console.log(str);