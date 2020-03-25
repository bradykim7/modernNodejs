const http = require('http');
const fs = require('fs');
const url = require('url');

// String.toUpperCase() => makes string capital letter
// String.toLowerCase() => oppsite of toUpperCase();

server = http.createServer(function(request, response){
    let pathname = url.parse(request.url).pathname;

    if(pathname == '/'){
        fs.readFile('Index.html', function(error ,data ){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        })

    }
    else if(pathname == '/OtherPage'){
        console.log(pathname);
        fs.readFile('OtherPage.html', function(error, data){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        })

    }

})
server.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
})

