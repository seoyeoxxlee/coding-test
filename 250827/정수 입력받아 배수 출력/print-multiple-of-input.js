const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let num = Number(input);
let res = "";

for (let i=1; i<6; i++) {
    res += (num*i + " ");
}

console.log(res);