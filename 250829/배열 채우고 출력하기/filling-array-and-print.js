const fs = require("fs");
const stringArray = fs.readFileSync(0).toString().trim().split(' ');


const newArray = stringArray.reverse().join('');
console.log(newArray);