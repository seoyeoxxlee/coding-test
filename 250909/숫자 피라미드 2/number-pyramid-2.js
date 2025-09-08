const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let str = "";
let count = 1;

for (let i=1; i<=n; i++) {
    str = "";
    for (let j=1; j<=i; j++) {
        str += count + " ";
        count++;
    }
    console.log(str);
}