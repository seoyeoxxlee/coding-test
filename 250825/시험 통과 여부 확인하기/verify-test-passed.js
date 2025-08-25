const fs = require("fs");
let num = Number(fs.readFileSync(0).toString().trim());

if (n >= 80) {
    console.log("pass");
}
else {
    console.log(`${80 - n} more score`);
}