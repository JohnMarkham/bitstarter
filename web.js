var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  data = new Buffer(256);
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});