const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let idx = 0;

while (true) {
    const userInput = Number(input[idx]);
    idx++;
    if (userInput === 0) {
        break;
    }
    console.log(userInput);
}