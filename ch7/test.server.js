const http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end("<h1>Test-file-2</h1>")
}).listen(52273,() => {console.log("Server Running at http://127.0.0.1:52273")})