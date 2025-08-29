const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
let sum = 0;

for (let i=1; i<=100; i++) {
    if (sum >= n) {
        console.log(i-1);
        break;
    } else {
        sum += i;
    }
}