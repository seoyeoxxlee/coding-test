const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let year = Number(input);

if (year % 4 === 0) {
    if (year % 100 !== 0) {
        console.log("true");
    } else console.log("false");
} else {
    if (year % 400 === 0) {
        console.log("true");
    } else console.log("false");
}
