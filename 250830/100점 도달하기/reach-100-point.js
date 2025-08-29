const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
let res = [];

for (let i=num; i<=100; i++) {
    if (i >= 90) {
        res.push("A");
    } else if (i >= 80) {
        res.push("B")
    } else if (i >= 70) {
        res.push("C");
    } else if (i >= 60) {
        res.push("D");
    } else {
        res.push("F");
    }
}
console.log(res.join(" "));