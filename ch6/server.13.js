let http = require('http');

http.createServer(function (request, response){
    // getting cookie
    let cookie = request.headers.cookie;

    // setting cookie
    response.writeHead(200, {
        'Content-Type' :'text/html',
        'Set-Cookie':['name = KMS', 'region = Seoul']
    });
    response.end('<h1>+JSON.stringify(cookie)+</h1>')

}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273')
})