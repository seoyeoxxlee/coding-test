const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let strArr = ["apple", "banana", "grape", "blueberry", "orange"];
let count = 0;

for (let s of strArr) {
    if ((s[2] === input) || (s[3] === input)) {
        console.log(s);
        count++;
    }
}
console.log(count);