var fs = require("fs");
var input = process.argv[2];
fs.readFile(input, function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString().split("\n").length - 1);
});
