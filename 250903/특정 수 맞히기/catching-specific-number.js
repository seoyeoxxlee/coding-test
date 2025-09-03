const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0;

while (true) {
    let n = Number(input[idx]);
    idx++;
    if (n < 25) {
        console.log("Higher");
    } else if (n > 25) {
        console.log("Lower");
    } else {
        console.log("Good");
        break;
    }
}

