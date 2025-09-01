const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let res = [];
res.push(a);

while (a < b) {
    if (a % 2 === 1) {
        res.push(a * 2)
        a = a * 2;
    } else {
        res.push(a + 3);
        a = a + 3;
    }
}

console.log(res.join(" "));