const http = require('http');

http.createServer(function(request, response){
    if(request.url == '/'){
        response.write('<!DOCTYPE html>')
        response.write('<html>')
        response.write('<head>')
        response.write('<title>Forever</title>')
        response.write('</head>')
        response.write('<body>')
        response.write('<h1>Forever Examples</h1>')
        response.write('</body>')


    }else {
        error.error.error();
    }
}).listen(52273, () => {console.log('Server Running at th 127.0.0.1:52273')})