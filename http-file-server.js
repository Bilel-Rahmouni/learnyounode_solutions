var http = require("http");
var fs = require("fs");

var portNumber = process.argv[2];
var fileToRead = process.argv[3];

var server = http.createServer(function (request, response) {
  var stream = fs.createReadStream(fileToRead);
  stream.pipe(response);
});

server.listen(portNumber);
