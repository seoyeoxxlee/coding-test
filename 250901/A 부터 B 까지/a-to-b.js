const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let res = "";

while(a <= b) {
    res += a + " ";
    if (a % 2 === 1) {
        a *= 2;
    } else {
        a += 3;
    }
}

console.log(res);