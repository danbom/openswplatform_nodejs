var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>Bob's Auto Parts\n<h1>");
  // res.writeHead(150, {'Content-Type': 'text/html'});
  res.write('<h2> Order Results</h2>');

  
  var data = fs.readFileSync('order.txt');
  res.write(data.toString());

  res.end();
}).listen(8080);