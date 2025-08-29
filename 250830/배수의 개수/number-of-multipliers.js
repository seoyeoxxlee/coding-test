const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
const numbers = input.split("\n").map(Number);

let cnt1 = 0;
let cnt2 = 0;

for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 3 === 0) && (numbers[i] % 5 === 0)) {
        cnt1++;
        cnt2++;
    } else if (numbers[i] % 5 === 0) {
        cnt2++;
    } else if (numbers[i] % 3 === 0) {
        cnt1++;
    }
}

console.log(cnt1 + " " + cnt2);
