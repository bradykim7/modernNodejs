const http = require('http');
const url = require('url');

http.createServer(function (request, response){

    let query = url.parse(request.url, true).query;

    if(request.method == 'GET'){
        console.log('GET Request')
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end('<h1>'+ JSON.stringify(query)+'</h1>')
    }
    else if(request.method == "POST"){
        request.on('data',function(data){
            console.log('POST Request' +data);
        })
    }
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
})