const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const arr = input.split("");

arr[1] = 'a';
arr[arr.length-2] = 'a';

const answer = arr.join("");
console.log(answer);