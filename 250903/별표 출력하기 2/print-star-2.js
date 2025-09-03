const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let n = Number(input);

for (let i=n; i>=1; i--) {
    str = "";
    for (let j=0; j<i; j++) {
        str += "*" + " ";
    }
    console.log(str);
}