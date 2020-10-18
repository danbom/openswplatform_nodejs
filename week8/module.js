var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (reqest, response){
    var pathname = url.parse(requestr.url).pathname;

    console.log("Request for " + pathname + " received.");

    fs.readFile(pathname.substr(1), function (err, data){
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type' : 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(data.toString());
        }
        
        response.end();

    });
}).listen(8081);