var fs = require("fs");
var input = process.argv[2];
console.log(fs.readFileSync(input).toString().split("\n").length - 1);
