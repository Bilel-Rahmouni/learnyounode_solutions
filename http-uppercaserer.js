var http = require("http");
var fs = require("fs");
var map = require("through2-map");

var portNumber = process.argv[2];

var server = http.createServer(function (request, response) {
  console.log(request.body);
  request
    .pipe(
      map(function (chunk) {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(response);
});

server.listen(portNumber);
