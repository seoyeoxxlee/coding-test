const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let num = Number(input);

if (num < 0) {
    console.log("ice");
} else if (num >= 100) {
    console.log("vapor");
} else {
    console.log("water");
}