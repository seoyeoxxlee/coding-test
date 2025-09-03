const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let start = Number(input[0]);
let end = Number(input[1]);
let ans = 0;

for (let i=start; i<=end; i++) {
    let count = 0;
    for (let j=1; j<=i; j++) {
        if (i % j === 0) {
            count++;
        }
    }
    if (count === 3) {
        ans++;
    }
}
console.log(ans);