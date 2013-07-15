var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function (err, data) {
    var buffer = new Buffer(256);
  if (err) throw err;
  buffer.write(data,"utf-8");
  response.send(buffer.toString('utf-8'));
#  console.log(data);
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
