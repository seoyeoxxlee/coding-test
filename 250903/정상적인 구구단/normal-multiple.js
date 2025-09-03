const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

for (i=1; i<=n; i++) {
    let str = "";
    for (j=1; j<=n; j++) {
        str += `${i} * ${j} = ${i * j}`
        if (j !== n) {
            str += ", ";
        }
    }
    console.log(str);
}